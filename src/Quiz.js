import { useState } from "react";
import { useParams, Link } from "react-router-dom";

const Quiz = () => {
    const { id } = useParams()
    const token = localStorage.getItem('token')
    console.log(id)
    var [questions, setQuestions] = useState(null)
    const [question, setQuestion] = useState(null)
    const [subject, setSubject] = useState(null)
    const [isFetched, setIsFetched] = useState(false)
    var [questionNo, setQuestionNo] =useState(1)
    var btns = null;
    if(question==null && questions==null){
        axios.get(`https://vaibhavquizapi.herokuapp.com/api/questionList/${id}`)
        .then(res=>{
            setQuestions(res.data)
            setQuestion(res.data[0])
            setSubject(res.data[0].subject)
            setIsFetched(true)
        })
    }

    if(isFetched){
        console.log(questions)
        btns = [...document.getElementsByClassName('questionBtn')]
        try{
            btns[0].classList.add('bg-info');
            btns[0].classList.add('text-light');
        }
        catch(error){
            console.log(error)
        }
        setIsFetched(false)
    }

    const onActive = (index) => {
        
        btns = [...document.getElementsByClassName('questionBtn')]
        console.log(btns[0]);
        try{
            for(var i = 0; i < btns.length; i++){
                btns[i].classList.remove('bg-info');
                btns[i].classList.remove('text-light');
            }
            console.log(btns[index])
            btns[index].classList.add('bg-info');
            btns[index].classList.add('text-light');
        }
        catch(error){
            console.log(error)
        }
        
        
        
    }

    if(token==null){
        return (
            <div className="p-3">
                <div>You are not authorised to view this page.</div>
                <div>Please Click on Login To log in to the portal</div>
                <Link to="/">Login</Link>
            </div>
        )
    }
    else{
    return ( 
        <div className="container bg-light border rounded shadow" style={{
            marginTop:"25vh"
        }}>
            <div className="row justify-content-between px-3 pt-3">
                <div className="col-3">
                    <h4>Test Title</h4>
                    {subject=='C' && <p>Chemistry</p>}
                    {subject=='P' && <p>Physics</p>}
                    {subject=='M' && <p>Mathematics</p>}
                    {subject=='B' && <p>Biology</p>}
                </div>
                <div className="col-3">
                    <p className="text-right">Username</p>
                    <button className="btn btn-warning float-right">01:00:00</button>
                </div>
            </div>
            <div className="row px-3 pb-3">
                <div className="col-9">
                    <div className="row p-3">
                        {question && <h6 className="border rounded col-12 py-3"><span>{questionNo}. </span>{question.question}</h6>}
                        <textarea type="text" className="form-control" placeholder="Answer here" rows="6" style={{
                            resize:"none"
                        }}></textarea>
                    </div>
                    <div className="row p-3">
                        <button className="btn btn-warning">Next</button>
                        <button className="btn btn-danger mx-2">Clear</button>
                        <button className="btn btn-success">Save & Next</button>
                    </div>
                </div>
                <div className="col-3 p-3">
                    <div className="row px-2 justify-content-end">
                        {questions && questions.map((question, index) => 
                                <div className="col-2 m-1 py-2 border rounded text-center questionBtn" data-id={index} key={question.id} onClick={() => {
                                    setQuestion(question)
                                    setQuestionNo(index + 1)
                                    onActive(index)
                                }}>{index + 1}</div>
                        )}                        
                    </div>
                </div>
            </div>
        </div>
    );
    }
}
 
export default Quiz;