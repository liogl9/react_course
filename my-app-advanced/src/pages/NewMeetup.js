import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useNavigate } from "react-router-dom";

function NewMeetupsPage(params) {
  const history = useNavigate();

  function addMeetupHandler(meetupData) {
    fetch(
      "https://react-getting-started-633b0-default-rtdb.europe-west1.firebasedatabase.app/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "aplication/json",
        },
      }
    ).then(() => {
      history("/");
    }); //for sending http requests se puede usar axios utiliza get por defecto
  }
  return (
    <section>
      <h1>Add new meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupsPage;
