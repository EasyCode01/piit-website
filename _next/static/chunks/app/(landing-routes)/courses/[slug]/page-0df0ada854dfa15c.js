(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[603],{9069:function(e,t,s){Promise.resolve().then(s.t.bind(s,5878,23)),Promise.resolve().then(s.bind(s,8901)),Promise.resolve().then(s.bind(s,2346)),Promise.resolve().then(s.bind(s,7371))},1047:function(e,t,s){"use strict";s.d(t,{Z:function(){return a}});let a=(0,s(9205).Z)("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]])},3145:function(e,t,s){"use strict";s.d(t,{default:function(){return i.a}});var a=s(8461),i=s.n(a)},8461:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var s in t)Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}(t,{default:function(){return o},getImageProps:function(){return l}});let a=s(7043),i=s(5346),r=s(5878),n=a._(s(5084));function l(e){let{props:t}=(0,i.getImgProps)(e,{defaultLoader:n.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,s]of Object.entries(t))void 0===s&&delete t[e];return{props:t}}let o=r.Image},7923:function(e,t,s){"use strict";s.d(t,{Vv:function(){return i}});var a=s(767);let i=async()=>{let{setCourses:e,setLoading:t,setError:s}=a.Z.getState();t(!0),s(null);try{let t=await fetch("".concat("https://api.techstudioacademy.com/api/v1","/external/courses"),{method:"GET",headers:{"Content-Type":"application/json"},cache:"no-store"});if(!t.ok)throw Error("Error: ".concat(t.statusText));let s=await t.json();e(s.data)}catch(e){s(e instanceof Error?e.message:"An unknown error occurred")}finally{t(!1)}}},1397:function(e,t,s){"use strict";s.d(t,{C:function(){return a}}),s(3079);var a=(0,s(2119).$)("bb5a3a93e2f5caaf67a692cc509b203fad7242aa")},8901:function(e,t,s){"use strict";s.d(t,{DurationBanner:function(){return m}});var a=s(7437),i=s(9298),r=s(6540),n=s(1047),l=s(2265),o=s(7923),c=s(8452),d=s(767);let m=e=>{var t,s,m,u,h,p,x,g;let{slug:f}=e,{loading:b,error:v,allCourses:y}=(0,d.Z)();(0,l.useEffect)(()=>{(0,o.Vv)()},[]);let j=y.find(e=>e.title.trim().replaceAll(/[\s/]+/g,"-").toLowerCase()===f);return b?(0,a.jsx)("section",{className:"mx-auto flex min-h-[172px] max-w-[1080px] items-center justify-center rounded-[10px] bg-white p-[40px] shadow-lg lg:translate-y-[-5rem]",children:(0,a.jsxs)("p",{className:"text-center font-[600]",children:[(0,a.jsx)(r.Z,{className:"mr-2 inline animate-spin text-mid-blue"}),"Loading ",f," duration..."]})}):v?(0,a.jsx)("section",{className:"mx-auto flex min-h-[172px] max-w-[1080px] items-center justify-center rounded-[10px] bg-white p-[40px] shadow-lg lg:translate-y-[-5rem]",children:(0,a.jsx)("p",{className:"text-center text-destructive",children:"Failed to load course information. Please try again later."})}):(0,a.jsxs)("section",{className:"mx-auto min-h-[172px] max-w-[1080px] rounded-[10px] bg-white p-[40px] shadow-lg lg:translate-y-[-5rem]",children:[(0,a.jsxs)("p",{className:"flex items-center justify-center gap-1 font-bold md:justify-start",children:[(0,a.jsx)(n.Z,{className:"w-[16px]"}),"Next Cohort:"]}),(0,a.jsxs)("section",{className:"flex flex-col items-center justify-between gap-5 text-center md:flex-row lg:text-left",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{className:"m-0 text-mid-blue",children:(0,c.o)(null==j?void 0:null===(s=j.classes)||void 0===s?void 0:null===(t=s.weekday[0])||void 0===t?void 0:t.startDate).date}),(0,a.jsxs)("p",{className:"m-0 text-sm font-bold text-gray-700",children:["Weekday Class:"," ",(0,c.o)(null==j?void 0:null===(u=j.classes)||void 0===u?void 0:null===(m=u.weekday[0])||void 0===m?void 0:m.startDate).date]})]}),(0,a.jsxs)("div",{className:"removeWeekend",children:[(0,a.jsx)("h2",{className:"m-0 text-mid-blue",children:(0,c.o)(null==j?void 0:null===(p=j.classes)||void 0===p?void 0:null===(h=p.weekend[0])||void 0===h?void 0:h.startDate).date}),(0,a.jsxs)("p",{className:"m-0 text-sm font-bold text-gray-700",children:["Weekend Class, Online Class:",(0,c.o)(null==j?void 0:null===(g=j.classes)||void 0===g?void 0:null===(x=g.weekend[0])||void 0===x?void 0:x.startDate).date]})]}),(0,a.jsx)("div",{children:(0,a.jsx)(i.VO,{variant:"outline",className:"border-mid-blue text-mid-blue",size:"lg",href:"/register",children:"Register Now"})})]})]})}},2346:function(e,t,s){"use strict";s.d(t,{RegisterForm:function(){return h}});var a=s(7437),i=s(3590),r=s(9298),n=s(6540),l=s(2265),o=s(9501),c=s(7923),d=s(1397),m=s(8233),u=s(7009);let h=e=>{let{slug:t}=e,[s,h]=(0,l.useState)(!1),[p,x]=(0,l.useState)(),[g,f]=(0,l.useState)(!1),{toast:b}=(0,r.pm)(),v=(0,o.cI)({resolver:(0,i.F)(u.S3),defaultValues:{firstName:"",lastName:"",email:"",phoneNumber:"",course:t,schedule:"weekday"}});(0,l.useEffect)(()=>{(0,c.Vv)()},[]);let{handleSubmit:y,formState:{errors:j},control:w,reset:N}=v,k=async e=>{f(!0);let s=await (0,d.C)(e,t);s.success?(x(s.success),h(!0),N()):b({variant:"destructive",title:"Something went wrong!",description:s.error||"Failed to register for the course."}),f(!1)};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.l0,{...v,children:(0,a.jsx)("section",{className:"relative z-[2] max-w-[457px] before:absolute before:left-[66px] before:top-[-60px] before:z-[-1] before:hidden before:h-[387px] before:w-[467px] before:rounded-[15px] before:bg-[#072C5B] before:content-empty before:lg:block",children:(0,a.jsxs)("div",{className:"h-full rounded-[15px] bg-white p-[29px]",children:[(0,a.jsx)("h6",{className:"mb-[27px] text-[16px] font-[700]",children:"Register to learn more about the program pricing and curriculum"}),(0,a.jsxs)("form",{onSubmit:y(k),className:"grid grid-cols-2 gap-[20px]",children:[(0,a.jsx)(r.Wi,{name:"firstName",control:w,render:e=>{var t;let{field:s}=e;return(0,a.jsxs)(r.xJ,{children:[(0,a.jsx)(r.NI,{children:(0,a.jsx)(r.II,{placeholder:"First Name",className:"w-full rounded-md border px-4 py-2 text-black",...s})}),j.firstName&&(0,a.jsx)(r.zG,{className:"text-xs italic text-destructive",children:null===(t=j.firstName)||void 0===t?void 0:t.message})]})}}),(0,a.jsx)(r.Wi,{name:"lastName",control:w,render:e=>{var t;let{field:s}=e;return(0,a.jsxs)(r.xJ,{children:[(0,a.jsx)(r.NI,{children:(0,a.jsx)(r.II,{placeholder:"Last Name",className:"w-full rounded-md border px-4 py-2 text-black",...s})}),j.lastName&&(0,a.jsx)(r.zG,{className:"text-xs italic text-destructive",children:null===(t=j.lastName)||void 0===t?void 0:t.message})]})}}),(0,a.jsx)(r.Wi,{name:"email",control:w,render:e=>{var t;let{field:s}=e;return(0,a.jsxs)(r.xJ,{className:"col-span-2",children:[(0,a.jsx)(r.NI,{children:(0,a.jsx)(r.II,{type:"email",placeholder:"Email Address",className:"w-full rounded-md border px-4 py-2 text-black",...s})}),j.email&&(0,a.jsx)(r.zG,{className:"text-xs italic text-destructive",children:null===(t=j.email)||void 0===t?void 0:t.message})]})}}),(0,a.jsx)(r.Wi,{name:"phoneNumber",control:w,render:e=>{var t;let{field:s}=e;return(0,a.jsxs)(r.xJ,{className:"col-span-2",children:[(0,a.jsx)(r.NI,{children:(0,a.jsx)(r.II,{placeholder:"Phone Number",className:"w-full rounded-md border px-4 py-2 text-black",...s})}),j.phoneNumber&&(0,a.jsx)(r.zG,{className:"text-xs italic text-destructive",children:null===(t=j.phoneNumber)||void 0===t?void 0:t.message})]})}}),(0,a.jsx)("div",{className:"col-span-2",children:(0,a.jsx)(r.VO,{size:"lg",type:"submit",variant:"primary",className:"w-full bg-mid-blue",isDisabled:g,children:g?(0,a.jsx)(n.Z,{className:"animate-spin text-primary"}):"Get Program Package"})})]})]})})}),(0,a.jsx)(m.Z,{title:"Course Registered Successfully",isOpen:s,onClose:()=>{h(!1),x(void 0)},responseMessage:p||"",isError:!1})]})}},7371:function(e,t,s){"use strict";s.d(t,{SectionThree:function(){return d}});var a=s(7437),i=s(5397),r=s(6129),n=s(195),l=s(8985),o=s(8211),c=s(7874);let d=()=>(0,a.jsxs)("section",{children:[(0,a.jsx)("div",{className:"min-h-[495px] py-[95px]",children:(0,a.jsx)(c.Q,{})}),(0,a.jsx)("div",{className:"min-h-[874px]",children:(0,a.jsx)(o.r,{})}),(0,a.jsx)(l.i,{className:"my-[50px] min-h-[412px] lg:my-[100px]",children:(0,a.jsx)(r.e,{})}),(0,a.jsxs)(l.i,{className:"min-h-[952px]",children:[(0,a.jsx)("h2",{className:"text-center",children:"FAQs"}),(0,a.jsx)(i.TsaAccordion,{})]}),(0,a.jsx)(l.i,{className:"py-[50px] lg:py-[120px] xl:min-h-[575px]",children:(0,a.jsx)(n.Z,{})})]})},6129:function(e,t,s){"use strict";s.d(t,{e:function(){return o}});var a=s(7437),i=s(9298),r=s(3145),n=s(3976),l=s(8452);let o=()=>(0,a.jsx)(i.gz,{className:(0,l.cn)("mx-auto flex min-h-[392px] max-w-full flex-col justify-between rounded-[16px] bg-primary p-4 text-background md:max-w-[1244px] md:flex-row md:p-[42px]"),topSlot:(0,a.jsx)(r.default,{className:"hidden lg:block",width:112,height:112,src:"/icons/box-2.png",alt:"icon"}),bottomSlot:(0,a.jsx)(r.default,{className:"hidden h-[88px] w-[91px] lg:block",src:"/icons/box-1(full).png",alt:"icon",width:91,height:80}),testimonials:n.aP})},195:function(e,t,s){"use strict";var a=s(7437),i=s(9298),r=s(3145);t.Z=()=>(0,a.jsxs)("section",{className:"relative flex max-w-[1240px] rounded-[15px] bg-primary p-[40px] text-center text-white lg:max-h-[335px] lg:px-[145px] lg:py-[60px] lg:text-left",children:[(0,a.jsxs)("div",{className:"mx-auto h-fit max-w-[500px] lg:mx-0",children:[(0,a.jsx)("p",{className:"text-md font-light text-white",children:"Need help choosing a course?"}),(0,a.jsx)("h5",{className:"text-white",children:"Talk To An Expert"}),(0,a.jsx)("p",{className:"mb-[32px] mt-[16px] text-sm font-light leading-[22px]",children:"Are you indecisive about what course to choose? Would you like to talk to a Tech expert over any tech related issue? We have professionals in place who are ready and willing to be of help."}),(0,a.jsx)(i.VO,{href:"/contact",variant:"primary",size:"lg",className:"w-[159px] bg-mid-blue",children:"Get Help"})]}),(0,a.jsx)("div",{className:"absolute bottom-0 right-[148px] hidden overflow-hidden lg:block",children:(0,a.jsx)(r.default,{width:279,height:400,src:"/images/smiling-lady.png",alt:"smiling-lady",className:"object-cover"})}),(0,a.jsx)("div",{className:"absolute left-[-2rem] top-[-2rem] hidden overflow-hidden xl:block",children:(0,a.jsx)(r.default,{width:116,height:118,src:"/icons/box-2.png",alt:"icon",className:"object-cover"})}),(0,a.jsx)("div",{className:"absolute bottom-[-2rem] right-[-2rem] hidden overflow-hidden xl:block",children:(0,a.jsx)(r.default,{width:90,height:72,src:"/icons/box-1(transparent).png",alt:"icon",className:"object-cover"})})]})},8233:function(e,t,s){"use strict";var a=s(7437),i=s(9298),r=s(3145);s(2265),t.Z=e=>{let{isOpen:t,onClose:s,responseMessage:n,isError:l,image:o,title:c}=e;return(0,a.jsx)(i.Vq,{open:t,onOpenChange:s,children:(0,a.jsxs)(i.cZ,{children:[(0,a.jsx)(i.fK,{children:(0,a.jsx)(i.$N,{children:(0,a.jsx)(r.default,{className:"mx-auto",width:138,height:85,src:l?"/gifs/scream.gif":o||"/images/yes.png",alt:"image"})})}),(0,a.jsxs)("div",{className:"text-center",children:[(0,a.jsx)("h5",{className:"mb-4 text-xl font-bold",children:l?"Something went wrong":c}),(0,a.jsx)("p",{className:l?"text-red-600":"",children:l?n:"Thank you for contacting us! Our team is reviewing your message and will respond promptly. Feel free to explore our website for more information in the meantime. We appreciate your patience!"})]}),(0,a.jsx)(i.cN,{children:(0,a.jsx)("button",{className:"mt-4 rounded px-4 py-2 text-white ".concat(l?"bg-red-600":"bg-mid-blue"),onClick:s,children:"Close this window"})})]})})}},3976:function(e,t,s){"use strict";s.d(t,{Bw:function(){return i},JC:function(){return o},Ss:function(){return l},WQ:function(){return a},Z3:function(){return r},aP:function(){return n}});let a=[{name:"Fullstack Development",image:"/images/fullstack.png",link:"/courses/fullstack-development"},{name:"Product Design",image:"/images/ui-ux.png",link:"/courses/product-design-ui-ux"},{name:"Data Science",image:"/images/datascience.png",link:"/courses/data-science"},{name:"Digital Marketing",image:"/images/logo-black.png",link:"/courses/digital-marketing-immersive"},{name:"Cyber Security",image:"/images/logo-black.png",link:"/courses/cyber-security"}],i=[{route:"About Us",link:"/about"},{route:"Courses",link:"",dropdown:[]},{route:"FAQ",link:"/faq"},{route:"Contact Us",link:"/contact"}],r=["/companies/btc.png","/companies/access-bank.png","/companies/interswitch.png","/companies/loyalty-solution.png","/companies/pwc.png","/companies/stutern.png","/companies/uba.png"],n=[{message:"I came into techStudio Academy with practically no prior knowledge in software development. However, within a few weeks, I was able to grasp the crux of software development and also master the soft skills required for being a software developer. So far so good, the skills acquired have given me a mind-blowing push in my career as a software developer.",image:"/images/joseph.jpg",name:"JOSEPH DARAMOLA",job:"Frontend Developer"},{message:"TechStudio Academy has been one of the big push I needed to get in the real world space. I had an immense learning that was really different from the self learning I started with. The learning was fun and there were some internship job opportunities that were presented to us. I got my first gig immediately after the program. Thank you TechStudio for that push I needed.",image:"/images/peter.jpg",name:"PETER EDEAWE",job:"Software Developer"},{message:"I bless the day the Instagram algorithm pop up TechStudio Academy to my news feed. I read through their curriculum and other details about the Bootcamp and I told myself this is the opportunity I've been waiting for. I wasn't disappointed, the environment was well ventilated and conducive, with competent instructors. Here I am today at OT&T Consulting, fulfilling my dreams thanks to TechStudio Academy.",image:"/images/rilwan.jpg",name:"RILWAN AJIBOLA",job:"Software Developer"}],l=[{label:"Apply",description:"At Tech Studio we offer a variety of courses designed to build your skills and professionally improve you. All you have to do is apply."},{label:"Get Admitted",description:"Once we confirm your payment for the program, we reserve your spot. You will go through the onboarding process before the program starts."},{label:"Start classes",description:"Be sure to attend the introductory classes, this will play a huge role in your subsequent learning stages. You'll participate in projects, personal tasks, and group works."}],o=["/images/facility1.png","/images/facility2.png","/images/facility3.png","/images/facility4.png","/images/facility5.png","/images/facility6.png","/images/facility7.png"]},7009:function(e,t,s){"use strict";s.d(t,{S3:function(){return n},hN:function(){return r},hV:function(){return l},wm:function(){return o}});var a=s(1229);let i=a.Ry({firstName:a.Z_().min(2,"First Name must be at least 2 characters long").min(1,"First Name is required"),lastName:a.Z_().min(2,"Last Name must be at least 2 characters long").min(1,"Last Name is required"),email:a.Z_().email("Must be a valid email address").min(1,"Email Address is required"),phoneNumber:a.Z_().min(11,"Phone Number must be at least 10 characters long").min(1,"Phone Number is required")}),r=a.Ry({fullName:a.Z_().min(2,"Full Name must be at least 2 characters long").min(1,"Full Name is required"),email:a.Z_().email("Must be a valid email address").min(1,"Email Address is required"),message:a.Z_().min(10,"Message must be at least 10 characters long").min(1,"Message is required")}),n=i.merge(a.Ry({course:a.Z_().min(1,"Course is required").refine(e=>""!==e,{message:"Please select a course"}),schedule:a.Z_().min(1,"Schedule is required").refine(e=>""!==e,{message:"Please select a schedule"})})),l=i.merge(a.Ry({course:a.Z_().min(1,"Course is required").refine(e=>""!==e,{message:"Please select a course"}),schedule:a.Z_().min(1,"Schedule is required").refine(e=>""!==e,{message:"Please select a schedule"}),newsletter:a.O7()})),o=a.Ry({email:a.Z_().email("Must be a valid email address").min(1,"Email Address is required")})},767:function(e,t,s){"use strict";var a=s(3011),i=s(6885);let r=(0,a.U)()((0,i.mW)(e=>({allCourses:[],loading:!0,error:null,activeCourse:null,setCourses:t=>e({allCourses:t,loading:!1}),setLoading:t=>e({loading:t}),setError:t=>e({error:t,loading:!1}),setActiveCourse:t=>e({activeCourse:t})})));t.Z=r},8211:function(e,t,s){"use strict";s.d(t,{r:function(){return o}});var a=s(7437),i=s(9298),r=s(3145),n=s(8985);let l=[(0,a.jsx)(r.default,{className:"w-full object-bottom",width:500,height:50,src:"/images/img-1.png",alt:"img"},0),(0,a.jsx)(r.default,{className:"w-full object-bottom",width:500,height:50,src:"/images/img-2.png",alt:"img"},1)],o=()=>(0,a.jsxs)(n.i,{className:"relative items-center gap-[28px] gap-y-0 lg:flex lg:py-[100px]",children:[(0,a.jsx)(i.Ug,{variant:"gallery",galleryContent:l}),(0,a.jsx)("div",{className:"right-0 z-10 rounded-lg bg-background px-[28px] py-[47px] shadow-lg lg:absolute lg:max-w-[458px]",children:(0,a.jsxs)("div",{children:[(0,a.jsx)("h6",{className:"font-bold",children:"A World-Class Learning Facility"}),(0,a.jsx)("p",{className:"my-[25px] leading-[26px]",children:"At Tech Studio Academy, we have created a conducive environment for learning, combining exceptional school structures, inspiring classrooms, and dedicated tutors. We understand that the physical surroundings greatly impact the educational experience, and we strive to provide a nurturing setting that fosters academic growth, creativity, and personal development."}),(0,a.jsx)("p",{className:"leading-[26px]",children:"Our classrooms are carefully designed to facilitate effective teaching and learning to enable tutors to deliver dynamic and engaging lessons that captivate students attention and spark their curiosity."})]})})]})},7874:function(e,t,s){"use strict";s.d(t,{Q:function(){return o}});var a=s(7437),i=s(9298),r=s(3145),n=s(8985),l=s(3976);let o=()=>{let e=l.Z3.map((e,t)=>(0,a.jsx)(r.default,{width:100,height:50,src:e,alt:"company"},t));return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.i,{className:"mb-[50px] grid grid-cols-1 items-end gap-[28px] gap-y-0 text-center lg:mb-[64px] lg:grid-cols-2 lg:text-left",children:[(0,a.jsxs)("div",{className:"flex-1",children:[(0,a.jsx)("span",{className:"text-sm font-bold uppercase text-mid-blue",children:"LIFE AFTER TRAINING"}),(0,a.jsx)("h3",{className:"mt-[12px]",children:"Where Our Graduates Work"})]}),(0,a.jsx)("div",{className:"flex-1",children:(0,a.jsx)("p",{className:"leading-[25px]",children:"Our talented graduates flourish in leading companies across the globe, making significant contributions to both their personal growth and the organizations they serve. They work in industries ranging from Information technology to Telecommunication, and more."})})]}),(0,a.jsx)(i.z5,{className:"h-[85px] space-x-[30px] lg:space-x-[73px]",children:e})]})}}},function(e){e.O(0,[343,990,878,712,591,972,349,397,971,117,744],function(){return e(e.s=9069)}),_N_E=e.O()}]);