import Acordion from "./components/Acordion";

function AcordionPage(){
    const  items=[
        {
            id:1,
            label:'Can I use React on a project?',
            content:'You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.'
        },
        {
            id:2,
            label:'Can I use JavaScript on a project?',
            content:'You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.'
        },
        {
            id:3,
            label:'Can I use Css on a project?',
            content:'You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.'
        }
    ];

    return (<div>
        <Acordion items={items}/>
    </div>);
}

export default AcordionPage;