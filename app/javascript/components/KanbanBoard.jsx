import React from 'react'
import Board from 'react-trello'


const data = {
    lanes: [
      {
        id: 'lane1',
        title: 'Shelf',
        label: '2/2',
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
  render() {
    return <Board data={data} />
  }
}