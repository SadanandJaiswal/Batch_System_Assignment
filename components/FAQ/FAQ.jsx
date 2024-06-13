import React from 'react';

const data = [
  {
    heading: "The Best Financial Accounting App Ever!",
    desc: `“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris."`,
  },
  {
    heading: "The Best Financial Accounting App Ever!",
    desc: `“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris."`,
  },
  {
    heading: "The Best Financial Accounting App Ever!",
    desc: `“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris."`,
  },
  {
    heading: "The Best Financial Accounting App Ever!",
    desc: `“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris."`,
  },
  {
    heading: "The Best Financial Accounting App Ever!",
    desc: `“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris."`,
  },
  {
    heading: "The Best Financial Accounting App Ever!",
    desc: `“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris."`,
  }
];

const FaqItemList = ({min,max}) =>{
  return(
    <div className="flex flex-col w-1/2 gap-2">
          {data.map((item,index)=>{
            if(index>=min && index<max){
              return(
                <div className={`${index%2===0? 'bg-red-500 text-white' : ''} rounded  p-6 pt-5`}>
                  <h1 class="text-2xl font-bold mb-1">
                    {item.heading}
                  </h1>
                  <p>{item.desc}</p>
                </div>
              )
            }
          })}
      </div>
  )
}

const FAQ = () => {
  return (
    <div className="flex px-[10%] flex-col justify-center item-center pb-10">
      <div className="flex flex-col justify-center item-cente">
          <h1 className="text-red-500 mb-1 font-bold text-xl">F A Q</h1>
          <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold  text-black mb-6">
              Frequently Asked <br /> Questions
          </h1>
      </div>
      <div className=" flex gap-6 mb-10">
        <FaqItemList min={0} max={3}/>
        <FaqItemList min={3} max={6}/>
      </div>
    </div>
  )
}

export default FAQ
