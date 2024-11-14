import Noresult from '../Assets/icons/no-result.svg';

const NoResultDiv = () => {
  return (
    <div className="no-results">
        <img src={Noresult} alt="No results found" className="icon" />
        <h3 className="title">Something went wrong</h3>
        <p className="message">We&apos;re unable to retrieve the weather details. Ensure you&apos;ve entered a valid city or try again later.</p>
    </div>
  )
}

export default NoResultDiv