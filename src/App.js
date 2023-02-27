import './App.css';
import Employee from './components/Employee';

function App() {
  const showEmployees = true
  return (
    <div className="App">
        {showEmployees ? (
            <>
              <Employee name="Caleb" role="intern" />
              <Employee name="Abby"/>
              <Employee name="John"/>
            </>
          ) : (
            <p>You cannot seee the employees</p>
        )}
    </div>
  );
}

export default App;
