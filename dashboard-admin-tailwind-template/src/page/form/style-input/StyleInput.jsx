import React, { useState } from 'react'

const StyleInput = () => {
  const [value, setValue] = useState('');
  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <>
      <div class="input-group">
        <input
          required=""
          type="text"
          name="text"
          autocomplete="off"
          class="input"
        />
        <label class="user-label">First Name</label>
      </div>
      <form>
          <div className="input-container">
            <input type="text" value={value} onChange={handleChange} />
            <label className={value && 'filled'}>
              First name
            </label>
          </div>
          <div className="input-container">
            <input type="text" value={value} onChange={handleChange} />
            <label className={value && 'filled'}>
              Last name
            </label>
          </div>
        </form>
    </>
  )
}

export default StyleInput
