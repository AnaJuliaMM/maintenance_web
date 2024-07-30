import React from 'react'

type HomeCardProps =  {
  value:number;
  category:string;
  color:string;
  icon: React.ReactNode;

}

export const HomeCard:React.FC<HomeCardProps> = ({value, category, color, icon}) => {
  return (
    <div className={`flex justify-between p-6 ${color} rounded-md items-center`}>
    <div className="flex flex-col">
      <strong>{value}</strong>
      <span>{category}</span>
    </div>
    {icon}
  </div>
  )
}
