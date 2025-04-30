import './JournalItem.scss';

function JournalItem() {
  const title = 'Подготовка к обновлению курсов';
  const date = new Date();
  const text = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, vitae dolores, ipsa, optio quibusdam unde laboriosam accusantium ratione dolore quasi delectus praesentium a quam quis quo eveniet architecto libero necessitatibus?'

  return (
    <div className='journal-item'>
      <h2 className='journal-item__header'>{title}</h2>
      <div className='journal-item__body'>
        <div className='journal-item__date'>{date.toLocaleString()}</div>
        <div className='journal-item__text'>{text}</div>
      </div>
    </div>
  );
}

export default JournalItem;
