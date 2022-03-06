import './About.css'

const Skills = () => {
    const technologies = ["C++", "mySQL", "Laravel", "Java", "HTML", "JavaScript", "ReactJS", "C#", "PHP"];
    const certifications = ["Microsoft Certified Solutions Developer", "CompTIA Security+", "Google Certified Professional Cloud Architect"];

    const onHover = (property) => {
        const targetClass = property.nativeEvent.srcElement.className;
        document.getElementsByClassName(targetClass)[0].style.fontSize ='38px';
        document.getElementsByClassName(targetClass)[0].style.color ='#64FFDA';
        document.getElementsByClassName(targetClass)[0].style.padding ='0px';
        document.getElementsByClassName(targetClass)[0].style.cursor ='default';
    }

    const offHover = (property) => {
        const targetClass = property.nativeEvent.srcElement.className;
        document.getElementsByClassName(targetClass)[0].style.fontSize ='28px';
        document.getElementsByClassName(targetClass)[0].style.color ='#CCD6F6';
        document.getElementsByClassName(targetClass)[0].style.padding ='5px';
    }

    const listTechnologies = technologies.map((tech, i) =>
        <div className={"tech-" + i} key={i} onMouseOver={onHover}
            onMouseLeave={offHover}>{tech}</div>
    );

    console.log(listTechnologies);

    return (
        <div className="grid-tech">
            {listTechnologies}
        </div>
    )
}

export default Skills