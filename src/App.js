
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
      winner: '',
    };

    this.userplay = this.userplay.bind(this);
    this.gamecheck = this.gamecheck.bind(this);
    this.boardfull = this.boardfull.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.computerMove = this.computerMove.bind(this); 
  }

  computerMove() {

    // Look for blocking move
    let the_board = this.state.board;
    let pp = 'X';
    let cp = 'O';
    let made_blocking_move = false;

    let tl = the_board[0][0], tm = the_board[0][1], tr = the_board[0][2],
        ml = the_board[1][0], mm = the_board[1][1], mr = the_board[1][2],
        bl = the_board[2][0], bm = the_board[2][1], br = the_board[2][2];

    // top row L --> R
    if (tl === pp && tm === pp && tr === '') {
      the_board[0][2] = cp;
      made_blocking_move = true;
    }
    else if (tl === pp && tm === '' && tr === pp) {
      the_board[0][1] = cp;
      made_blocking_move = true;      
    }
    else if (tl === '' && tm === pp && tr === pp) {
      the_board[0][0] = cp;
      made_blocking_move = true;
    }
    // Middle row L --> R
    else if (ml === pp && mm === pp && mr === '') {
      the_board[1][2] = cp;
      made_blocking_move = true;
    }
    else if (ml === pp && mm === '' && mr === pp) {
      the_board[1][1] = cp;
      made_blocking_move = true;      
    }
    else if (ml === '' && mm === pp && mr === pp) {
      the_board[1][0] = cp;
      made_blocking_move = true;
    }
    // Bottom Row L --> R
    else if (bl === pp && bm === pp && br === '') {
      the_board[2][2] = cp;
      made_blocking_move = true;
    }
    else if (bl === pp && bm === '' && br === pp) {
      the_board[2][1] = cp;
      made_blocking_move = true;      
    }
    else if (bl === '' && bm === pp && br === pp) {
      the_board[2][0] = cp;
      made_blocking_move = true;
    }
    // Left Column Top --> Bottom
    else if (tl === pp && ml === pp && bl === '') {
      the_board[2][0] = cp;
      made_blocking_move = true;
    }
    else if (tl === pp && ml === '' && bl === pp) {
      the_board[1][0] = cp;
      made_blocking_move = true;      
    }
    else if (tl === '' && ml === pp && bl === pp) {
      the_board[0][0] = cp;
      made_blocking_move = true;
    }
    // Middle Column Top --> Bottom
    else if (tm === pp && mm === pp && bm === '') {
      the_board[2][1] = cp;
      made_blocking_move = true;
    }
    else if (tm === pp && mm === '' && bm === pp) {
      the_board[1][1] = cp;
      made_blocking_move = true;      
    }
    else if (tm === '' && mm === pp && bm === pp) {
      the_board[0][1] = cp;
      made_blocking_move = true;
    }
    // Right Column Top --> Bottom
    else if (tr === pp && mr === pp && br === '') {
      the_board[2][2] = cp;
      made_blocking_move = true;
    }
    else if (tr === pp && mr === '' && br === pp) {
      the_board[1][2] = cp;
      made_blocking_move = true;      
    }
    else if (tr === '' && mr === pp && br === pp) {
      the_board[0][2] = cp;
      made_blocking_move = true;
    }
    // Diagonal Left --> Right
    else if (tl === pp && mm === pp && br === '') {
      the_board[2][2] = cp;
      made_blocking_move = true;
    }
    else if (tl === pp && mm === '' && br === pp) {
      the_board[1][1] = cp;
      made_blocking_move = true;      
    }
    else if (tl === '' && mm === pp && br === pp) {
      the_board[0][0] = cp;
      made_blocking_move = true;
    }
    // Diagonal Right --> Left
    else if (tr === pp && mm === pp && bl === '') {
      the_board[2][0] = cp;
      made_blocking_move = true;
    }
    else if (tr === pp && mm === '' && bl === pp) {
      the_board[1][1] = cp;
      made_blocking_move = true;      
    }
    else if (tr === '' && mm === pp && bl === pp) {
      the_board[0][2] = cp;
      made_blocking_move = true;
    }

    if (made_blocking_move) {
      this.gamecheck(cp);
      this.setState({  board: the_board, currentPlayer: pp });  
      return;
    }    

    let made_finishing_move = false;

    if (tl === cp && tm === cp && tr === '') {
      the_board[0][2] = cp;
      made_finishing_move = true;
    }
    else if (tl === cp && tm === '' && tr === cp) {
      the_board[0][1] = cp;
      made_finishing_move = true;      
    }
    else if (tl === '' && tm === cp && tr === cp) {
      the_board[0][0] = cp;
      made_finishing_move = true;
    }
    // Middle row L --> R
    else if (ml === cp && mm === cp && mr === '') {
      the_board[1][2] = cp;
      made_finishing_move = true;
    }
    else if (ml === cp && mm === '' && mr === cp) {
      the_board[1][1] = cp;
      made_finishing_move = true;      
    }
    else if (ml === '' && mm === cp && mr === cp) {
      the_board[1][0] = cp;
      made_finishing_move = true;
    }
    // Bottom Row L --> R
    else if (bl === cp && bm === cp && br === '') {
      the_board[2][2] = cp;
      made_finishing_move = true;
    }
    else if (bl === cp && bm === '' && br === cp) {
      the_board[2][1] = cp;
      made_finishing_move = true;      
    }
    else if (bl === '' && bm === cp && br === cp) {
      the_board[2][0] = cp;
      made_finishing_move = true;
    }
    // Left Column Top --> Bottom
    else if (tl === cp && ml === cp && bl === '') {
      the_board[2][0] = cp;
      made_finishing_move = true;
    }
    else if (tl === cp && ml === '' && bl === cp) {
      the_board[1][0] = cp;
      made_finishing_move = true;      
    }
    else if (tl === '' && ml === cp && bl === cp) {
      the_board[0][0] = cp;
      made_finishing_move = true;
    }
    // Middle Column Top --> Bottom
    else if (tm === cp && mm === cp && bm === '') {
      the_board[2][1] = cp;
      made_finishing_move = true;
    }
    else if (tm === cp && mm === '' && bm === cp) {
      the_board[1][1] = cp;
      made_finishing_move = true;      
    }
    else if (tm === '' && mm === cp && bm === cp) {
      the_board[0][1] = cp;
      made_finishing_move = true;
    }
    // Right Column Top --> Bottom
    else if (tr === cp && mr === cp && br === '') {
      the_board[2][2] = cp;
      made_finishing_move = true;
    }
    else if (tr === cp && mr === '' && br === cp) {
      the_board[1][2] = cp;
      made_finishing_move = true;      
    }
    else if (tr === '' && mr === cp && br === cp) {
      the_board[0][2] = cp;
      made_finishing_move = true;
    }
    // Diagonal Left --> Right
    else if (tl === cp && mm === cp && br === '') {
      the_board[2][2] = cp;
      made_finishing_move = true;
    }
    else if (tl === cp && mm === '' && br === cp) {
      the_board[1][1] = cp;
      made_finishing_move = true;      
    }
    else if (tl === '' && mm === cp && br === cp) {
      the_board[0][0] = cp;
      made_finishing_move = true;
    }
    // Diagonal Right --> Left
    else if (tr === cp && mm === cp && bl === '') {
      the_board[2][0] = cp;
      made_finishing_move = true;
    }
    else if (tr === cp && mm === '' && bl === cp) {
      the_board[1][1] = cp;
      made_finishing_move = true;      
    }
    else if (tr === '' && mm === cp && bl === cp) {
      the_board[0][2] = cp;
      made_finishing_move = true;
    }

    if (made_finishing_move) {
      this.gamecheck(cp);
      this.setState({  board: the_board, currentPlayer: pp });  
      return;
    }    

    // Look for any move
    for(let idx = 0; idx < 2; idx++) {
      for(let jdx = 0; jdx < 2; jdx++) {
        if (the_board[idx][jdx] === '') {
          the_board[idx][jdx] = cp;
          this.gamecheck(cp);
          this.setState({  board: the_board, currentPlayer: pp });
          return;
        }
      }
    }

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

  gamecheck(pp) {

    let board = this.state.board;
    let cp = pp;

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

        this.computerMove();

      }
    }
    
    this.gamecheck(cp);
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
          <div className="col-4">
            <button class="btn btn-primary" onClick={this.handleReset}>Reset</button>
          </div>
          <div className="col-4">
            Current Player: {this.state.currentPlayer}
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
