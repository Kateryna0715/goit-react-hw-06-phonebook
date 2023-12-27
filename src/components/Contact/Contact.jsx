import CSS from './index.module.css';

const Contact = ({ id, name, number, deleteContact }) => {
  return (
    <li className={CSS.listElement}>
      {name}: {number}
      <button className={CSS.btnDelete} onClick={() => deleteContact(id)}>
        Delete
      </button>
    </li>
  );
};
export default Contact;
