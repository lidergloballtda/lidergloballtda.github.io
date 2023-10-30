function executarCnaes() {
  const iframe = document.createElement('iframe');
  iframe.style.position = 'fixed';
  iframe.style.top = '0';
  iframe.style.left = '0';
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  iframe.style.border = 'none';
  iframe.style.zIndex = '9999';
  iframe.srcdoc = `
    <style>
      body {
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        font-family: 'Asap', sans-serif;
      }

      .popup-container {
        background-color: #002C37;
        color: #f7f7f7;
        border-radius: 10px;
        padding: 20px;
        max-width: 80%;
        width: 80%;
        max-height: 80%;
        overflow-y: auto;
        position: relative;
        margin: auto;
        margin-top: 10%;
      }

      .close-button {
        position: absolute;
        top: 10px;
        right: 10px;
        cursor: pointer;
        color: #f7f7f7;
        font-size: 18px;
      }
    </style>
    <div class="popup-container">
      <div class="close-button" id="closeButton">X</div>
      <h2>*Informações de atividades CNAEs (Código Nacional de Atividade Econômicas)</h2>
      <p>4530-7/03 - Comércio a varejo de peças e acessórios novos para veículos automotores</p>
      <p>4321-5/00 - Instalação e manutenção elétrica</p>
      <p>4399-1/03 - Obras de alvenaria</p>
      <p>4520-0/01 - Serviços de manutenção e reparação mecânica de veículos automotores</p>
      <p>4520-0/05 - Serviços de lavagem, lubrificação e polimento de veículos automotores</p>
      <p>4543-9/00 - Manutenção e reparação de motocicletas e motonetas</p>
      <p>4619-2/00 - Representantes comerciais e agentes do comércio de mercadorias em geral não especializado</p>
      <p>4741-5/00 - Comércio varejista de tintas e materiais para pintura</p>
      <p>4742-3/00 - Comércio varejista de material elétrico</p>
      <p>4744-0/01 - Comércio varejista de ferragens e ferramentas</p>
      <p>4744-0/02 - Comércio varejista de madeira e artefatos</p>
      <p>4744-0/03 - Comércio varejista de materiais hidráulicos</p>
      <p>4753-9/00 - Comércio varejista especializado de eletrodomésticos e equipamentos de áudio e vídeo</p>
      <p>4759-8/99 - Comércio varejista de outros artigos de uso pessoal e doméstico não especificados anteriormente</p>
      <p>4911-6/00 - Transporte ferroviário de carga</p>
      <p>4930-2/01 - Transporte rodoviário de carga, exceto produtos perigosos e mudanças, municipal.</p>
      <p>5212-5/00 - Carga e descarga</p>
      <p>8011-1/01 - Atividades de vigilância e segurança privada</p>
      <p>8211-3/00 - Serviços combinados de escritório e apoio administrativo</p>
    </div>
  `;

  document.body.appendChild(iframe);

  iframe.addEventListener('load', function () {
    const closeButton = iframe.contentDocument.getElementById('closeButton');

    closeButton.addEventListener('click', () => {
      document.body.removeChild(iframe);
    });
  });
}
