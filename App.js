import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Title from "./components/Title";
import Modal from "./components/Modal";
import EventList from "./components/EventList";
import NewEventForm from "./components/NewEventForm";

function App() {
  const [showModal, setShowModal] = useState(false)
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([]);
  
  const addEvent = (event) => {
    setEvents((preEvents) => {
      return [...preEvents, event]
    })
    setShowModal(false)

  }
  const handleClick = (id) => {
    setEvents(
      events.filter((event) => {
        return id !== event.id;
      })
    );
    console.log(id);
  
   
    }
  const subtitle = "All the latest events in Marioland";
  return (
    <div className="App">
      
      <Title title="Events in your area" subtitle={subtitle} />
      {/* <Title title="Another title" subtitle="another subtitle" /> */}
      <br />

      <button onClick={() => setShowModal(true)}>Add New Event</button>
      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>Hide events</button>
        </div>
      )}
      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>Show events</button>
        </div>
      )}
      {showEvents && <EventList events={events} handleClick={handleClick} />}
        

    {/* <Modal>
            <h2>10% off coupon code!!</h2>
            <p>Use the code Ninja10 at the checkout.</p>
    </Modal> */}
      {showModal && <Modal isSalesModal={true}>
        <NewEventForm addEvent= {addEvent}/>
      </Modal>}
    </div>
  );
}

export default App;
