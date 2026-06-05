const App = () => {
    const students = ["John", "Emma", "Michael", "Sophia"];
    return (
        <div>
            <ul>
                {students.map((student, index) => <li key={index}>{student}</li>)}
            </ul>
        </div>
    )
}

export default App