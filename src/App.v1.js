
import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props) {
    
    // Invoke the parent constructor with the properties
    super(props);

    this.state = {
      board: [ 
        ['','',''],
        ['','',''],
        ['','','']
      ],
      targetValue: '',
      currentPlayer: 'X',
      winner: ''
    };

    this.userplay = this.userplay.bind(this);
    this.gamecheck = this.gamecheck.bind(this);
    this.boardfull = this.boardfull.bind(this);
    this.handleReset = this.handleReset.bind(this);
    
  }

  handleReset(evt) {

    evt.preventDefault();

    this.setState({
      board: [ ['','',''], ['','',''], ['','',''] ],
      targetValue: '',
      currentPlayer: 'X',
      winner: ''
    });
  }

  boardfull() {
    
    let board = this.state.board;

    let tl = board[0][0], tm = board[0][1], tr = board[0][2],
        ml = board[1][0], mm = board[1][1], mr = board[1][2],
        bl = board[2][0], bm = board[2][1], br = board[2][2];

    return tl !== '' && tm !== '' && tr !== '' &&
           ml !== '' && mm !== '' && mr !== '' &&
           bl !== '' && bm !== '' && br !== '';
  }

  gamecheck() {

    let board = this.state.board;
    let cp = this.state.currentPlayer;

    let tl = board[0][0], tm = board[0][1], tr = board[0][2],
        ml = board[1][0], mm = board[1][1], mr = board[1][2],
        bl = board[2][0], bm = board[2][1], br = board[2][2];

    // 1st row L -> R
    if (tl === cp && tm === cp && tr === cp) {
      this.setState({ winner: "The winner is "  + cp });
    }
    // 2nd row L -> R
    else if (ml === cp && mm === cp && mr === cp) {
      this.setState({ winner: "The winner is "  + cp });
    }
    // 3rd row L -> R
    else if (bl === cp && bm === cp && br === cp) {
      this.setState({ winner: "The winner is "  + cp });
    }
    // Top down TL -> LL
    else if (tl === cp && ml === cp && bl === cp) {
      this.setState({ winner: "The winner is "  + cp });
    }
    // Middle down TM -> BM
    else if (tm === cp && mm === cp && bm === cp) {
      this.setState({ winner: "The winner is "  + cp });
    }
    // Right down TR -> BR
    else if (tr === cp && mr === cp && br === cp) {
      this.setState({ winner: "The winner is "  + cp });
    }
    // L -> R Diagonal
    else if (tl === cp && mm === cp && br === cp) {
      this.setState({ winner: "The winner is "  + cp });    
    }
    // R -> L Diagonal
    else if (tr === cp && mm === cp && bl === cp) {
      this.setState({ winner: "The winner is "  + cp });        
    }
    else if (this.boardfull()) {
      this.setState({ winner: "No winners!" });
    }

  }

  userplay(evt) {

    let cell_clicked = evt.target.id;
    let cell_valid;
    let cell;
    let cp = this.state.currentPlayer;

    if (this.state.winner !== '') {
      return;
    }

    switch(cell_clicked) {
      case 'tl': case 'tm': case 'tr':
      case 'ml': case 'mm': case 'mr':
      case 'bl': case 'bm': case 'br':
        cell = document.getElementById(cell_clicked);
        cell_valid = true;
        break;
      default:
        cell_valid = false;
    }

    if (cell_valid) {

      let the_board = this.state.board;

      if (cell.innerText === '') {

        switch(cell_clicked) {
          case 'tl':
            the_board[0][0] = cp;
            break; 
          case 'tm': 
            the_board[0][1] = cp;
            break; 
          case 'tr':
            the_board[0][2] = cp;
            break; 
          case 'ml': 
            the_board[1][0] = cp;
            break; 
          case 'mm': 
            the_board[1][1] = cp;
            break; 
          case 'mr':
            the_board[1][2] = cp;
            break; 
          case 'bl': 
            the_board[2][0] = cp;
            break; 
          case 'bm': 
            the_board[2][1] = cp;
            break; 
          case 'br':
            the_board[2][2] = cp;
            break;
          default:
            break;
        }

        this.setState({ 
          board: the_board,
          currentPlayer: ((cp === 'X') ? 'O' : 'X') 
        });
      }
      this.gamecheck();
    }
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div onClick={this.userplay} className="letter col-4" id="tl">{this.state.board[0][0]}</div>
            <div onClick={this.userplay} className="letter col-4" id="tm">{this.state.board[0][1]}</div>
            <div onClick={this.userplay} className="letter col-4" id="tr">{this.state.board[0][2]}</div>
          </div>
          <div className="row">
            <div onClick={this.userplay} className="letter col-4" id="ml">{this.state.board[1][0]}</div>
            <div onClick={this.userplay} className="letter col-4" id="mm">{this.state.board[1][1]}</div>
            <div onClick={this.userplay} className="letter col-4" id="mr">{this.state.board[1][2]}</div>
          </div>
          <div className="row">
            <div onClick={this.userplay} className="letter col-4" id="bl">{this.state.board[2][0]}</div>
            <div onClick={this.userplay} className="letter col-4" id="bm">{this.state.board[2][1]}</div>
            <div onClick={this.userplay} className="letter col-4" id="br">{this.state.board[2][2]}</div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <button class="btn btn-primary" onClick={this.handleReset}>Reset</button>
          </div>
        </div>
        <div className="row">
          <div className="winner col-12 jumbotron">{this.state.winner}</div>
        </div>
      </div>
    );  
  }

}

export default App;
