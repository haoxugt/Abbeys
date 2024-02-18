import { useParams } from "react-router-dom";

function SpotShowPage() {
  const { spotId } = useParams();
  return (
    <h1>welcome to {`${spotId}`}</h1>
  )
}

export default SpotShowPage;