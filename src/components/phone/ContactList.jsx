// export const ContactList = ({ state }) => {
//   return (
//     <>
//       <h2>Phone list</h2>
//       <p>Name: {state.name}</p>
//       <p>Number: {state.number}</p>

//     </>
//   );
// };
export default function List({state,onDeleteContact}) {
const listItems = state.map(contact =>
  <li key={contact.id}>
    <div>
    <p>
      <b>{contact.name}: </b>
        {' ' + contact.number}
        
    </p>
    <button
      type="submit"
      onClick={() => onDeleteContact(contact.id)}
    >delete</button>
    </div>
    
  </li>
);
return <ul>{listItems}</ul>;
}