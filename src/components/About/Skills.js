import './About.css'

const Skills = ({ showAltView }) => {
    const technologies = ["C++", "mySQL", "Laravel", "Java", "HTML", "JavaScript", "ReactJS", "C#", "PHP"];
    const certifications = ["Microsoft Certified Solutions Developer", "CompTIA Security+", "Google Certified Professional Cloud Architect", "AWS Certified Solutions Architect-Associate"];

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

    const onHoverCerts = (property) => {
        const targetClass = property.nativeEvent.srcElement.className;
        document.getElementsByClassName(targetClass)[0].style.background = '#233554';
        document.getElementsByClassName(targetClass)[0].style.borderLeft = '5px solid #64FFDA'
    }

    const offHoverCerts = (property) => {
        const targetClass = property.nativeEvent.srcElement.className;
        document.getElementsByClassName(targetClass)[0].style.background = '#0A192F';
        document.getElementsByClassName(targetClass)[0].style.borderLeft = '5px solid #0A192F'
    }

    const listTechnologies = technologies.map((tech, i) =>
        <div className={"tech-" + i} key={i} onMouseOver={onHoverTech}
            onMouseLeave={offHoverTech}>{tech}</div>
    );
    const listCertifications = certifications.map((cert, i) =>
        <li className={"certs-" + i} key={i} onMouseOver={onHoverCerts}
            onMouseLeave={offHoverCerts}>{cert}</li>
    );

    const technologyGrid = <div className="grid-tech">{listTechnologies}</div>
    const certificationGrid = <div className="grid-cert"><ul>{listCertifications}</ul></div>

    return (
        showAltView ? technologyGrid : certificationGrid
    )
}

export default Skills