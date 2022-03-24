import {
    TechnologiesGrid,
} from './AboutElements';

const Technologies = () => {
    const technologies = ["C++", "mySQL", "Laravel", "Java", "HTML", "JavaScript", "ReactJS", "C#", "PHP"];

    const onHoverTech = (property) => {
        const targetClass = property.nativeEvent.srcElement.className;
        document.getElementsByClassName(targetClass)[0].style.fontSize ='38px';
        document.getElementsByClassName(targetClass)[0].style.color ='#64FFDA';
        document.getElementsByClassName(targetClass)[0].style.padding ='0px';
        document.getElementsByClassName(targetClass)[0].style.cursor ='default';
        }

    const offHoverTech = (property) => {
        const targetClass = property.nativeEvent.srcElement.className;
        document.getElementsByClassName(targetClass)[0].style.fontSize ='28px';
        document.getElementsByClassName(targetClass)[0].style.color ='#CCD6F6';
        document.getElementsByClassName(targetClass)[0].style.padding ='5px';
    }

    const listTechnologies = technologies.map((tech, i) =>
        <TechnologiesGrid className={"tech-" + i} key={i} onMouseOver={onHoverTech}
            onMouseLeave={offHoverTech}>{tech}</TechnologiesGrid>
    );

    return (
        <>{listTechnologies}</>
    )
}

export default Technologies;