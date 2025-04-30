import './JournalItem.scss';

function JournalItem() {
  return (
    <div className='journal-item'>
      <h2 className='journal-item__header'>Title</h2>
      <div className='journal-item__body'>
        <div className='journal-item__date'>22.05.25</div>
        <div className='journal-item__text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, vitae dolores, ipsa, optio quibusdam unde laboriosam accusantium ratione dolore quasi delectus praesentium a quam quis quo eveniet architecto libero necessitatibus?</div>
      </div>
    </div>
  );
}

export default JournalItem;
