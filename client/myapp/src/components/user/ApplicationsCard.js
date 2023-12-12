import {useState,useEffect} from 'react' ;
import {message} from 'antd' ;

const ApplicationsCard = () => {
  const [applicationData, setApplicationData] = useState([]);

  useEffect(() => {
    const fetchApplication = async () => {
      try {
        let fetchDataResponse = await fetch('http://localhost:3500/v4/api/projects/fetchapplication');
        if (!fetchDataResponse) {
          message.error('Unable to fetch your applications');
        } else {
          let jsonData = await fetchDataResponse.json();
          setApplicationData(jsonData);
        }
      } catch (error) {
        message.error('Server side error occurred');
      }
    };
    fetchApplication();
  }, []);

  return (
    <ul className="cardItemSet">
      {applicationData?.map((application) => (
        <li key={application._id} className="cardItems">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="p-4">
              <p className="cardParagraph">Cover Letter :- {application.projectDescription}</p>
              <p className="cardParagraph">Project Days: {application.projectDays}</p>
              <p className="cardParagraph">Project Amount: {application.projectAmount}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ApplicationsCard;


