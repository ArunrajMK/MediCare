import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./appoinment.css"
function Appoinment() {

    const [search, setSearch] = useState("")

    const data = [
        {
            id: 2342,
            patient: "Arunraj Mk",
            consultation: "First consultation",
            team: "Medical Camp",
            doctor: "Kiran",
            slot: "Jul 3, 2021 9:00 Pm",
            status: "Completed",
            invoice: "Done",
            action: "┇"
        },
        {
            id: 2343,
            patient: "Varun",
            consultation: "First consultation",
            team: "Medical Camp",
            doctor: "Kiran",
            slot: "Jul 3, 2021 4:00 Pm",
            status: "Canceled",
            invoice: "Refunded",
            action: "┇"
        },
        {
            id: 2344,
            patient: "Sunil",
            consultation: "First consultation",
            team: "Medical Camp",
            doctor: "Kiran",
            slot: "Jul 3, 2021 6:00 Pm",
            status: "Completed",
            invoice: "Done",
            action: "┇"
        },
        {
            id: 2345,
            patient: "Deepak",
            consultation: "First consultation",
            team: "Medical Camp",
            doctor: "Kiran",
            slot: "Jul 3, 2021 10:00 Pm",
            status: "Completed",
            invoice: "Done",
            action: "┇"
        },
        {
            id: 2346,
            patient: "Prakash",
            consultation: "First consultation",
            team: "Medical Camp",
            doctor: "Kiran",
            slot: "Jul 3, 2021 7:00 Pm",
            status: "pending",
            invoice: "pending",
            action: "┇"
        }
    ]


    const navigate = useNavigate()

    return (
        <div id="appoinmentContainer">
            <div id="appounmentTopDiv">
                <div>
                <h2 id="appoinmentText1">Appoinments</h2>
            <p id="appoinmentText2">List of booked appoinments</p> 
            <button onClick={()=>alert("Added")} id="addButton">Add ⊕</button>
                </div>
               
           
              
          
            <hr id="hr"/>
            </div>
            
          


            <input onChange={(e)=>setSearch(e.target.value)} placeholder='Search by name,number'/>
            <select id="appoinmentSelect">
                <option>
                   Date
                </option>
            </select>
            <select id="appoinmentSelect">
                <option>
                  Conseltation Type
                </option>
            </select>
            <select id="appoinmentSelect">
                <option>
                  Status
                </option>
            </select>
            <select id="appoinmentSelect">
                <option>
                   Invoice
                </option>
            </select>
           
            <div id="appoinmentNavbar">
             
                <div className='navIcon' onClick={() => navigate("/dashboard")} id="navFirstDiv">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 12.2222H9.77778V0H0V12.2222ZM0 22H9.77778V14.6667H0V22ZM12.2222 22H22V9.77778H12.2222V22ZM12.2222 0V7.33333H22V0H12.2222Z" fill="white" />
                    </svg>
                </div>
                <div className='navIcon'>
                    <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_7745_1595)">
                            <path d="M8.5201 10.027H6.6801C6.5142 10.0219 6.34815 10.0291 6.1833 10.0483C5.83559 10.1063 5.50734 10.2474 5.22686 10.4592C4.94638 10.6711 4.72208 10.9473 4.5733 11.2643C4.42868 11.5675 4.33444 11.8919 4.29423 12.2249C4.24517 12.5502 4.19917 12.8755 4.15623 13.2038C4.0949 13.6811 4.0397 14.1583 3.9937 14.6356C3.9937 14.7663 3.96917 14.894 3.95997 15.0247C3.95997 15.0825 3.95997 15.1433 3.94463 15.2041C3.94615 15.2324 3.94615 15.2609 3.94463 15.2892C3.94775 15.3175 3.94775 15.346 3.94463 15.3743C3.92122 15.3774 3.89751 15.3774 3.8741 15.3743H1.22143C1.12637 15.3743 1.0313 15.3743 0.936235 15.3743C0.890241 15.371 0.84593 15.3558 0.807725 15.3302C0.76952 15.3046 0.738756 15.2695 0.718501 15.2284C0.647559 15.0981 0.601797 14.9558 0.583568 14.8089C0.549845 14.5987 0.531397 14.3864 0.528368 14.1735C0.517375 13.6297 0.536827 13.0858 0.586634 12.5441C0.632634 11.9908 0.693968 11.4375 0.761435 10.8843C0.810502 10.4982 0.865701 10.1091 0.920901 9.72601C0.952017 9.43782 1.03293 9.15708 1.1601 8.89609C1.32393 8.58203 1.58515 8.32841 1.9053 8.17257C2.18473 8.06697 2.48411 8.02339 2.78237 8.04489H8.17357C8.2717 8.04489 8.51703 8.04489 8.52317 8.04489C8.5293 8.04489 8.5201 9.84457 8.5201 10.027Z" fill="#8394B8" />
                            <path d="M11.3482 2.4053H10.6674C10.2507 2.4081 9.84582 2.54225 9.51122 2.78834C9.16048 3.05677 8.89707 3.42149 8.75375 3.83714C8.6172 4.29501 8.54901 4.77024 8.55135 5.24769C8.52069 5.71585 8.52069 6.18706 8.52069 6.6613C8.52069 6.67954 8.52069 6.77378 8.52069 6.78594C8.52069 6.7981 8.48082 6.78594 8.47469 6.78594H6.68069C6.47098 6.77718 6.2662 6.72015 6.08257 6.61937C5.89894 6.51859 5.74149 6.37683 5.62269 6.2053C5.37891 5.86838 5.23162 5.47236 5.19642 5.05922C5.14633 4.47694 5.12994 3.89231 5.14735 3.30818C5.14735 3.01938 5.16269 2.73362 5.18109 2.44482C5.19142 2.22387 5.21394 2.00364 5.24855 1.78514C5.31659 1.35214 5.54649 0.96037 5.89255 0.687696C6.13339 0.516278 6.42417 0.427665 6.72055 0.435376H9.78722C10.0549 0.426385 10.3197 0.492791 10.5508 0.626896C10.9204 0.871513 11.1782 1.2504 11.2684 1.68178C11.3159 1.92023 11.3426 2.1623 11.3482 2.4053V2.4053Z" fill="#8394B8" />
                            <path d="M12.5223 12.5441H10.5105C10.23 12.5454 9.95257 12.6024 9.69453 12.7115C9.43649 12.8206 9.20303 12.9797 9.00785 13.1794C8.78744 13.4101 8.6136 13.6804 8.49572 13.9759C8.39514 14.254 8.32722 14.5427 8.29332 14.8362C8.16758 15.6996 8.05718 16.569 7.98665 17.4385L7.95905 17.7881C7.95905 17.8124 7.95905 17.934 7.95905 17.9431C7.95905 17.9522 7.89772 17.9431 7.87932 17.9431H5.01505C4.97149 17.9496 4.92703 17.9467 4.8847 17.9346C4.84236 17.9226 4.80315 17.9016 4.76972 17.8732C4.69467 17.7863 4.64392 17.6815 4.62252 17.5692C4.57786 17.4101 4.54809 17.2473 4.53358 17.0828C4.50443 16.6506 4.50443 16.2169 4.53358 15.7847C4.55505 15.3378 4.59492 14.8909 4.63785 14.4471C4.71145 13.7499 4.79936 13.0538 4.90158 12.3586C4.93138 12.0805 5.00484 11.8087 5.11932 11.553C5.25408 11.2662 5.46638 11.0221 5.73265 10.8477C5.9648 10.7023 6.2339 10.6253 6.50852 10.6258H12.4425C12.4639 10.6228 12.4856 10.6228 12.5069 10.6258C12.51 10.6439 12.51 10.6624 12.5069 10.6805V12.0455C12.5069 12.2188 12.5069 12.3829 12.5223 12.5441Z" fill="#8394B8" />
                            <path d="M23.4587 20.4632H8.92579C8.76939 20.4632 8.68659 20.3051 8.64059 20.1592C8.55826 19.8839 8.51694 19.5982 8.51792 19.311C8.50259 18.9189 8.51792 18.5267 8.53939 18.1376C8.58846 17.3077 8.68046 16.4808 8.79086 15.657C8.83379 15.3256 8.87672 14.9942 8.92886 14.6659C8.97136 14.3711 9.07584 14.0883 9.23552 13.836C9.37245 13.6264 9.56002 13.4541 9.78121 13.3346C10.0024 13.2152 10.2502 13.1524 10.5021 13.152H21.7475C21.8912 13.1475 22.035 13.1566 22.1769 13.1794C22.4566 13.2487 22.7133 13.3892 22.9214 13.587C23.1296 13.7848 23.282 14.0331 23.3637 14.3072C23.4542 14.614 23.5158 14.9285 23.5477 15.2466C23.5998 15.6266 23.6489 16.0066 23.6949 16.3835C23.747 16.8426 23.793 17.2955 23.8298 17.7637C23.8666 18.2318 23.885 18.6514 23.8819 19.0952C23.8915 19.4295 23.8574 19.7636 23.7807 20.0893C23.7286 20.2382 23.6489 20.4632 23.4587 20.4632Z" fill="#8394B8" />
                            <path d="M19.3751 8.89597C19.3751 9.19997 19.3751 9.48877 19.3537 9.78365C19.3465 10.0018 19.324 10.2192 19.2862 10.4342C19.2406 10.6912 19.1432 10.9364 18.9999 11.1552C18.8566 11.3741 18.6703 11.5621 18.4521 11.708C18.2329 11.8279 17.9846 11.8857 17.7345 11.8752H14.7107C14.4175 11.8802 14.1315 11.7846 13.9011 11.6046C13.5532 11.3128 13.3145 10.9134 13.2234 10.4707C13.1794 10.2502 13.1537 10.0265 13.1467 9.80189C13.1191 9.50397 13.1191 9.19997 13.1191 8.89597C13.1191 8.32445 13.1191 7.75293 13.1835 7.18749C13.1991 6.94518 13.2508 6.70648 13.3369 6.47917C13.4401 6.2133 13.6113 5.97862 13.8337 5.79821C14.0868 5.60703 14.3988 5.50825 14.7169 5.51853H17.7406C17.9838 5.50999 18.2256 5.55897 18.4459 5.66141C18.8196 5.87288 19.0931 6.2228 19.2065 6.63421C19.2621 6.83281 19.297 7.03654 19.3107 7.24221C19.3332 7.50162 19.3486 7.76002 19.3567 8.01741C19.3721 8.32445 19.3751 8.61325 19.3751 8.89597Z" fill="#8394B8" />
                            <path d="M15.3228 4.71889C15.3072 4.36755 15.2107 4.02441 15.0407 3.71569C14.8827 3.44582 14.6421 3.23286 14.3538 3.10769C14.1574 3.03729 13.9491 3.00529 13.7404 3.01345C13.5258 3.01345 10.4775 3.01345 10.3058 3.06209C9.97252 3.16008 9.6875 3.37659 9.50538 3.67009C9.3263 3.96877 9.2212 4.30528 9.19871 4.65201C9.15578 5.08977 9.14351 5.53057 9.13431 5.97137C9.12511 6.41217 9.13431 6.92897 9.16191 7.40929C9.17153 7.79464 9.26571 8.17328 9.43791 8.51889C9.59653 8.83807 9.85459 9.09816 10.1739 9.26065C10.3676 9.342 10.5771 9.37939 10.7872 9.37009C11.0019 9.37009 12.5199 9.37009 12.5291 9.37009C12.5383 9.37009 12.5291 9.28193 12.5291 9.26673V9.07521C12.5291 8.95057 12.5291 8.82289 12.5291 8.69825C12.5291 8.19969 12.5444 7.70113 12.5904 7.20561C12.6119 6.81866 12.7066 6.43916 12.8695 6.08689C13.021 5.77662 13.2462 5.50747 13.5258 5.30257C13.7954 5.10506 14.1127 4.98134 14.4458 4.94385C14.6695 4.93172 14.8937 4.93172 15.1174 4.94385H15.3351C15.3351 4.85569 15.329 4.78881 15.3228 4.71889Z" fill="#8394B8" />
                        </g>
                        <defs>
                            <clipPath id="clip0_7745_1595">
                                <rect width="24" height="20.6667" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>

                </div>
                <div onClick={() => navigate("/appoinment")} className='navIcon'>

                    <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 2H19V4H18V0H16V2H13V4H12V0H10V2H7V4H6V0H4V2H2C1.46957 2 0.960859 2.21071 0.585786 2.58579C0.210714 2.96086 0 3.46957 0 4V22C0 22.5304 0.210714 23.0391 0.585786 23.4142C0.960859 23.7893 1.46957 24 2 24H16L22 18V4C22 3.46957 21.7893 2.96086 21.4142 2.58579C21.0391 2.21071 20.5304 2 20 2ZM20 18H16V22H2V10H20V18Z" fill="#8394B8" />
                    </svg>

                </div>
                <div className='navIcon'>
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5 0C5.6075 0 0 5.6075 0 12.5C0 19.3925 5.6075 25 12.5 25C19.3925 25 25 19.3925 25 12.5C25 5.6075 19.3925 0 12.5 0ZM16.6667 9.02778C17.0503 9.02778 17.3611 9.33861 17.3611 9.72222C17.3611 10.1058 17.0503 10.4167 16.6667 10.4167H14.5206C14.1883 12.3842 12.4772 13.8889 10.4167 13.8889H10.01L15.0744 18.9533C15.3458 19.2244 15.3458 19.6642 15.0744 19.9353C14.9389 20.0711 14.7611 20.1389 14.5833 20.1389C14.4056 20.1389 14.2278 20.0711 14.0922 19.9356L7.84222 13.6856C7.64361 13.4869 7.58417 13.1883 7.69167 12.9289C7.79917 12.6692 8.0525 12.5 8.33333 12.5H10.4167C11.7083 12.5 12.7933 11.6128 13.1031 10.4167H8.33333C7.94972 10.4167 7.63889 10.1058 7.63889 9.72222C7.63889 9.33861 7.94972 9.02778 8.33333 9.02778H13.1031C12.7933 7.83167 11.7083 6.94444 10.4167 6.94444H8.33333C7.94972 6.94444 7.63889 6.63361 7.63889 6.25C7.63889 5.86639 7.94972 5.55556 8.33333 5.55556H16.6667C17.0503 5.55556 17.3611 5.86639 17.3611 6.25C17.3611 6.63361 17.0503 6.94444 16.6667 6.94444H13.5197C14.0339 7.51833 14.3886 8.23583 14.5222 9.02778H16.6667Z" fill="#8394B8" />
                    </svg>

                </div>
                <div className='navIcon'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.07189 23.9171L6.06574 22.1279L8.05853 23.9169L10.0497 22.1279L12.0438 23.9169L14.0361 22.1279L16.0281 23.9169L18.0222 22.1279L20.0145 23.9169L22.0062 22.1279L23.9998 23.9171V0.0664062L22.0057 1.85507L20.014 0.0664062L18.0217 1.85507L16.0276 0.0664062L14.0356 1.85507L12.0433 0.0664062L10.0492 1.85507L8.058 0.0664062L6.06574 1.85507L4.07189 0.0664062L2.08042 1.85507L0.0878906 0.0664062V23.9171L2.08042 22.1282L4.07189 23.9171ZM4.07189 6.02869H20.0142V8.41419H4.07189V6.02869ZM4.07189 10.7992H20.0142V13.1836H4.07189V10.7992ZM4.07189 15.5691H20.0142V17.9541H4.07189V15.5691Z" fill="#8394B8" />
                    </svg>

                </div>
                <div className='navIcon'>
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.7691 13.2848C20.8196 12.9067 20.8448 12.5159 20.8448 12.1C20.8448 11.6967 20.8196 11.2933 20.7565 10.9152L23.3152 8.92375C23.5421 8.74729 23.6051 8.40698 23.4664 8.1549L21.0464 3.97031C20.8952 3.69302 20.5801 3.60479 20.3028 3.69302L17.2904 4.90302C16.6602 4.42406 15.9922 4.02073 15.2485 3.71823L14.7948 0.516771C14.7444 0.214271 14.4923 0 14.1898 0H9.34977C9.04727 0 8.80779 0.214271 8.75737 0.516771L8.30362 3.71823C7.55998 4.02073 6.87935 4.43667 6.26175 4.90302L3.24935 3.69302C2.97206 3.59219 2.65696 3.69302 2.50571 3.97031L0.0983129 8.1549C-0.0529371 8.41958 -0.00252054 8.74729 0.249563 8.92375L2.80821 10.9152C2.74519 11.2933 2.69477 11.7093 2.69477 12.1C2.69477 12.4907 2.71998 12.9067 2.783 13.2848L0.224354 15.2763C-0.00252052 15.4527 -0.0655412 15.793 0.0731046 16.0451L2.4931 20.2297C2.64435 20.507 2.95946 20.5952 3.23675 20.507L6.24915 19.297C6.87935 19.7759 7.54737 20.1793 8.29102 20.4818L8.74477 23.6832C8.80779 23.9857 9.04727 24.2 9.34977 24.2H14.1898C14.4923 24.2 14.7444 23.9857 14.7822 23.6832L15.2359 20.4818C15.9796 20.1793 16.6602 19.7759 17.2778 19.297L20.2902 20.507C20.5675 20.6078 20.8826 20.507 21.0338 20.2297L23.4538 16.0451C23.6051 15.7678 23.5421 15.4527 23.3026 15.2763L20.7691 13.2848ZM11.7698 16.6375C9.27415 16.6375 7.23227 14.5956 7.23227 12.1C7.23227 9.60437 9.27415 7.5625 11.7698 7.5625C14.2654 7.5625 16.3073 9.60437 16.3073 12.1C16.3073 14.5956 14.2654 16.6375 11.7698 16.6375Z" fill="#8394B8" />
                    </svg>

                </div>




            </div>

            <div id="appoinmentBox">

                <table id="customers">
                    <tr>
                        <th>Order Id</th>
                        <th>Patient</th>
                        <th>Consultation</th>
                        <th>Team</th>
                        <th>Doctor</th>
                        <th>Slot</th>
                        <th>Status</th>
                        <th>Invoice</th>
                        <th>Action</th>
                    </tr>

                    {data.filter((item)=>{
        return search.toLocaleLowerCase()===''?item:item.patient.toLocaleLowerCase().includes(search.toLowerCase())
      }).map((item)=> (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.patient}</td>
                            <td>{item.consultation}</td>
                            <td>{item.team}</td>
                            <td>{item.doctor}</td>
                            <td>{item.slot}</td>
                            <td>{item.status}</td>
                            <td>{item.invoice}</td>
                            <td>{item.action}</td>
                        </tr>
                    ))}

                </table>

            </div>
            {/* <div id="appoinmentInnerBox">

     </div> */}
        </div>
    )
}

export default Appoinment