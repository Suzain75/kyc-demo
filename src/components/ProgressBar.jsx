function ProgressBar({ currentStep }) {
  return (
    <div className="progress">
      <div className={currentStep === 1 ? 'step active' : 'step'}>1. Personal info</div>
      <div className={currentStep === 2 ? 'step active' : 'step'}>2. Address</div>
      <div className={currentStep === 3 ? 'step active' : 'step'}>3. ID upload</div>
      <div className={currentStep === 4 ? 'step active' : 'step'}>4. Review</div>
    </div>
  )
}

export default ProgressBar