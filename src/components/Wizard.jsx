import { Step } from './Step'

export const Wizard = ({counter, totalSteps}) => {
  return (
    <div className="steps-container">
        {Array.from({ length: totalSteps }, (_, index) => (
            <Step num={(index + 1).toString()} counter={counter} />
        ))}
    </div>
  )
}
