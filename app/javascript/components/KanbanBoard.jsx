import React from 'react';
import Board from 'react-trello';
import axios from "axios";
import LoginHelper from "../helpers/LoginHelper";
import '../../assets/stylesheets/KanbanBoard.scss'
import Navbar from '../components/Navbar';



export default class KanbanBoard extends React.Component {
  state = {
    cardLane1: [],
    cardLane2: [],
    cardLane3: [],
  };

  getBooks = () => {

    const token = document.querySelector('meta[name="csrf-token"]').content;
    const headers = {
      'Content-Type': 'application/json',
         'X-CSRF-Token': token
      }

    const user = LoginHelper.getId()
    axios
			.get(
			  `http://localhost:3000/shelfs/books/${user}`,
			  {headers: headers}
			)
			.then(response => {
			  if (response.data.status === 200) {
        // objeto do banco já tá vindo com muitos campos vou filtrar só o que eu quero e no formato que eu já faço a amarração com o react-trelo de forma mais rápida.
        this.setState({
          cardLane1: response.data.book_list_estante.map(({ title, id, author, description }) => ({ label: author, id: id, title: title, description: description })), 
          cardLane2: response.data.book_list_lendo.map(({ title, id, author, description  }) => ({ label: author, id: id, title: title, description: description })), 
          cardLane3: response.data.book_list_lido.map(({ title, id, author,  description  }) => ({ label: author, id: id, title: title, description: description }))}, 
          () => {console.log(this.state.cardLane3)})



			  } else if (response.data.status === 500) {
				alert("aconteceu um erro na hora de carregar os livros, tente novamente em alguns instantes")
			  }
			})
			.catch(error => {
			  console.log("aconteceu algum error", error);
			});
  };

  

  componentDidMount = () => {
    this.getBooks();

  };
  
 

  listenerMudança = (event) => {
    
    const token = document.querySelector('meta[name="csrf-token"]').content;
    const headers = {
      'Content-Type': 'application/json',
         'X-CSRF-Token': token
      }

    const user = LoginHelper.getId()

    // nao vou atualizar nos states, já vou mandar para o back salvar no banco a nova lógica
    console.log(event)
      if (event["lanes"] && event["lanes"][0] && event["lanes"][1] && event["lanes"][2]){
        const newCardLane1 = event["lanes"][0].cards 
        const newCardLane2 = event["lanes"][1].cards 
        const newCardLane3 = event["lanes"][2].cards
        
        console.log(newCardLane3)
        if (!!newCardLane1.length || !!newCardLane2.length || !!newCardLane3.length){
          axios
          .post(
            "http://localhost:3000/shelfs/books/save",
            {
            shelves: {
              estante: newCardLane1,
              lendo: newCardLane2,
              lido: newCardLane3,
            },
            user: {
              user: user
            }
            },
            {headers: headers}
          )
          .then(response => {
            if (response.data.status === 200) {
            console.log('ui mamae agora vai !!')
            }
          })

        }
      }
  }
  

  render() {
    const data = {
      lanes: [
        {
          id: 'lane1',
          title: 'Shelf',
          // label: `${this.state.cardLane1.length}`,
          cards: this.state.cardLane1 
            // {id: 'Card1', title: 'Boa Leitura', description: 'Can AI make memes', label: '30 mins', draggable: false},
        },
        {
          id: 'lane2',
          title: 'Lendo' ,
          // label: `${this.state.cardLane2.length}`,
          cards: this.state.cardLane2
        },
        {
          id: 'lane3',
          title: 'Lido',
          // label: `${this.state.cardLane3.length}`,
          cards: this.state.cardLane3
        },
      ]
    }


    return (
      <div className='Centralizing-Kanban'>
        <Navbar />
        <Board data={data} onDataChange={this.listenerMudança} />
      </div>
    )
  }
}