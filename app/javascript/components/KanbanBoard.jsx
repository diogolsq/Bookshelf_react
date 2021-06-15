import React from 'react';
import Board from 'react-trello';
import axios from "axios";
import LoginHelper from "../helpers/LoginHelper";

const data = {
    lanes: [
      {
        id: 'lane1',
        title: 'Shelf',
        label: '',
        cards: [
          {id: 'Card1', title: 'Boa Leitura', description: 'Can AI make memes', label: '30 mins', draggable: false},
          {id: 'Card2', title: 'Pay Rent', description: 'Transfer via NEFT', label: '5 mins', metadata: {sha: 'be312a1'}},
          {id: 'Card3', title: 'Teste', description: 'Transfer via NEFT', label: '5 mins', metadata: {sha: 'be312a1'}}

        ]
      },
      {
        id: 'lane2',
        title: 'Lendo',
        label: '0/0',
        cards: []
      },
      {
        id: 'lane3',
        title: 'Lido',
        label: '0/0',
        cards: []
      },
    ]
  }


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
    console.log({user})
    axios
			.get(
			  `http://localhost:3000/shelfs/books/${user}`,
			  {headers: headers}
			)
			.then(response => {
			  if (response.data.status === 200) {
				console.log('ui mamae agora vai !!')
			  } else if (response.data.status === 500) {
				alert("aconteceu um erro na hora de carregar os livros, tente novamente em alguns instantes")
			  }
			})
			.catch(error => {
			  console.log("aconteceu algum error", error);
			});
  };


  componentWillMount = () => {
    this.getBooks();
  };
  
  render() {
    return (
    <Board data={data} />)
  }
}