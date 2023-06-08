// export const ContactList = ({ state }) => {
//   return (
//     <>
//       <h2>Phone list</h2>
//       <p>Name: {state.name}</p>
//       <p>Number: {state.number}</p>

//     </>
//   );
// };
export default function List({state}) {
const listItems = state.map(contact =>
  <li key={contact.id}>

    <p>
      <b>{contact.name}: </b>
        {' ' + contact.number}
        
    </p>
  </li>
);
return <ul>{listItems}</ul>;
}