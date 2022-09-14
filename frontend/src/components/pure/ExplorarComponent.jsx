import React from 'react'

const ExplorarComponent = () => {
  return (
    <div className="accordion" id="accordionExample">



      <div className="accordion-item">
        <h2 className="accordion-header"
          id="headingOne">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne">
            Acordeón artículo #1
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#lista">
          <div className="accordion-body">
            <strong>Este es el cuerpo del acordeón del primer elemento.</strong> Se muestra de forma predeterminada, hasta que el complemento de colapso agrega las clases apropiadas que usamos para diseñar cada elemento. Estas clases controlan la apariencia general, así como la visualización y ocultación a través de transiciones CSS. Puedes modificar cualquiera de esto con CSS personalizado o sobrescribir nuestras variables predeterminadas. También vale la pena señalar que casi cualquier HTML puede ir dentro de <code>.accordion-body</code>, aunque la transición limita el desbordamiento.
          </div>
        </div>
      </div>



      <div className="accordion-item">
        <h2
          className="accordion-header"
          id="headingTwo">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo">
            Acordeón artículo #2
          </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <strong>Este es el cuerpo del acordeón del segundo elemento.</strong> Está oculto de manera predeterminada, hasta que el complemento de Collapse agregue las clases apropiadas que usamos para diseñar cada elemento. Estas clases controlan la apariencia general, así como la visualización y ocultación a través de transiciones CSS. Puedes modificar cualquiera de esto con CSS personalizado o sobrescribir nuestras variables predeterminadas. También vale la pena señalar que casi cualquier HTML puede ir dentro de <code>.accordion-body</code>, aunque la transición limita el desbordamiento.
          </div>
        </div>
      </div>



      <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Acordeón artículo #3
          </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <strong>Este es el cuerpo del acordeón del tercer elemento.</strong> Está oculto de manera predeterminada, hasta que el complemento Collapse agregue las clases apropiadas que usamos para diseñar cada elemento. Estas clases controlan la apariencia general, así como la visualización y ocultación a través de transiciones CSS. Puedes modificar cualquiera de esto con CSS personalizado o sobrescribir nuestras variables predeterminadas. También vale la pena señalar que casi cualquier HTML puede ir dentro de <code>.accordion-body</code>, aunque la transición limita el desbordamiento.
          </div>
        </div>
      </div>




    </div>
  )
}

export default ExplorarComponent