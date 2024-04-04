import React from 'react'

const Footer = () => {
  return (
    <div className='border relative  h-full w-full mt-32'>
      <div className="py-12 h-full w-5/6 mx-auto flex items-center justify-between">
        <div className="flex flex-1 flex-col gap-4">
          <h2 className="">About the App</h2>
          <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, quibusdam culpa ipsa reprehenderit, temporibus asperiores deserunt consequatur aliquid, est non aliquam hic exercitationem? Tenetur ipsum nobis totam blanditiis unde animi perferendis omnis officia cumque odio molestias aliquam, error ducimus vel corrupti, quis possimus dolores praesentium dolor a voluptates. Magni, repellat!</p>
        </div>
        <div className="flex flex-1 flex-col gap-4">
          <h2 className="">Contacts</h2>
          <span className="">Phone: +21622620380</span>
        </div>
      </div>
    </div>
  )
}

export default Footer