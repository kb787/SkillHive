import { useNavigate } from "react-router-dom";

const ApplyButton = ({project}) => {
    let navigate = useNavigate();
    const handleClick = (maxAmount, maxDays) => () => {
      navigate('/ProjectBidding', { state: { maxAmount, maxDays } });
    }

    return (
      <button type="button" onClick={handleClick(project.maxAmount, project.maxDays)} className = "hiringButton">
        Bid
      </button>
    );
  }

  
export default ApplyButton ;  