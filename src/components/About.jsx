import line from '../assets/line.png';

const About = () => {
  return (
    <div className='about'>
        <div className="title">
            <img className='title-line' src={line} alt="line" />
            <h2>SOBRE</h2>
            <img className='title-line' src={line} alt="line" />
        </div>
        <p>
            A <strong>LX Motors</strong> é uma concessionária especializada em motos novas e seminovas, com 10 anos de história e credibilidade no mercado.<br />
            Nosso compromisso vai além da venda, <strong>queremos realizar sonhos e fortalecer a paixão por duas rodas!</strong><br />
            Trabalhamos com as principais marcas do setor, oferecendo variedade, qualidade e segurança em cada modelo.
            Mais do que motos, entregamos experiências, seja para quem está começando agora ou para os apaixonados por velocidade e liberdade.
            Na <strong>LX Motors</strong>, você encontra atendimento personalizado, transparência e a confiança de quem entende do assunto.
      </p>
    </div>
  )
}

export default About