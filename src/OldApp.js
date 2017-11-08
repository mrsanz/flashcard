// import React, { Component } from 'react';
// import './App.css';
//
// import fire from './fire';
//
//
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.addWord = this.addWord.bind(this);
//     this.removeWord = this.removeWord.bind(this);
//     this.state = { words: [] };
//   }
//   componentWillMount() {
//     let wordsRef = fire.database().ref('words').orderByKey().limitToLast(100);
//     wordsRef.on('child_added', snapshot => {
//       let word = { text: snapshot.val(), id: snapshot.key };
//       this.setState({ words: [word].concat(this.state.words) });
//     });
//     wordsRef.on('child_removed', snapshot => {
//       let word = { text: snapshot.val(), id: snapshot.key };
//       const result = this.state.words.reduce((acc, current) => {
//         if(current.id !== word.id) {
//           acc.push(current);
//         }
//         return acc;
//       }, []);
//       this.setState({ words: result });
//     });
//   }
//
//   addWord(e) {
//     e.preventDefault();
//     fire.database().ref('words').push( this.input.value );
//     this.input.value = '';
//   }
//   removeWord(e) {
//     e.preventDefault();
//     var id = e.currentTarget.value;
//     fire.database().ref('words').child(id).remove();
//   }
//   render() {
//     return (
//       <div>
//         <h1>Flash Card Application</h1>
//         <h2>Add some words to our database:</h2>
//         <form onSubmit={this.addWord}>
//           <input type="text" ref={ el => this.input = el }/>
//           <input type="submit"/>
//         </form>
//
//         <h2>Current words</h2>
//         <ul>
//           {this.state.words.map(word =>
//             <li key={word.id}>{word.text}&nbsp;<button value={word.id} onClick={this.removeWord}>X</button></li>
//           )}
//         </ul>
//       </div>
//     );
//   }
// }
//
// export default App;
