import React from 'react'

const ExistingSignature = ({ formData, handleChange}) => {
  return (
    <div>
        <div className=" flex pt-8 items-center gap-2 text-start">
              <div>
                <input
                  type="checkbox"
                  name="agree"
                  value={formData?.agree || false}
                  onChange={handleChange}
                />
              </div>
              <div>
                <p className=" text-md font-semibold text-red-600">
                  I promise to abide by the rules & regulations of the college
                  and also promise to attend classes regularly. I may be barred
                  from filling up the Examination Form if I do not attend the
                  required percentage of attendance prescribed by the
                  University.
                </p>
              </div>
            </div>
            
    </div>
  )
}

export default ExistingSignature