import './About.css'

const Certifications = () => {

    const certifications = ["Microsoft Certified Solutions Developer", "CompTIA Security+", "Google Certified Professional Cloud Architect", "AWS Certified Solutions Architect-Associate"];

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

    const listCertifications = certifications.map((cert, i) =>
        <li className={"certs-" + i} key={i} onMouseOver={onHoverCerts}
            onMouseLeave={offHoverCerts}>{cert}</li>
    );

    // const certificationGrid = <div className="grid-cert"><ul>{listCertifications}</ul></div>


  return (
    <div className="grid-cert"><ul>{listCertifications}</ul></div>
  )
}

export default Certifications