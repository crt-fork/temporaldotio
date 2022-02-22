import React from 'react'

export default function CheckBoxProps({ checkBoxList = [], headline }) {
  return (
    <div>
      <h2 className={clsx(
        "leading-tight sm:leading-tight md:leading-tight lg:leading-tight xl:leading-tight text-4xl sm:text-6xl lg:text-7xl xl:text-8xl mb-6 lg:mb-12 font-bold mx-auto tracking-tight "
        )}
      >{headline}</h2>
      <ul>
        <li>
          <FontAwesomeIcon icon="fal fa-check-square" title=""/>
          {checkBoxList.copy}
        </li>
      </ul>
    </div>
  )
}
