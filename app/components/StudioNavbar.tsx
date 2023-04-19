function StudioNavbar(props: any) {
  return (
    <div>
      <div className='bg-[#101112] p-4 font-bold text-gray-100'>Return</div>
      <>{props.renderDefault(props)}</>
    </div>
  );
}

export default StudioNavbar;
