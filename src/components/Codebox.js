import React from "react";
import Type from "./Inicio/Type";
import "./CodeBox.css"; // importe o arquivo CSS para estilizar o componente
import { DiReact } from "react-icons/di";
function CodeBox() {
  return (
    <div className="code-box">
      <div className="code-box-header">
        <header className="header">
          <div className="header-brand">
            <DiReact alt="React icon" className="header-icon" />
            <h1 className="header-title">
              <Type />
            </h1>
          </div>
        </header>
      </div>
      <pre className="code-box-content">
        <span className="cc-blue">import</span>{" "}
        <span className="cc-red">React</span>{" "}
        <span className="cc-blue">from</span>{" "}
        <span className="cc-green">'react'</span>;
        <br />
        <span className="cc-blue">function</span>{" "}
        <span className="cc-red">MyInfo</span>( ) &#123; <br />
        &#8194;&#8194;<span className="cc-blue">const</span> name ={" "}
        <span className="cc-green">"Igor Régis"</span>; <br />
        &#8194;&#8194;<span className="cc-blue">const</span> position ={" "}
        <span className="cc-green">"Programador Freelancer"</span> <br />
        &#8194;&#8194;<span className="cc-blue">const</span> age ={" "}
        <span className="cc-pink">24</span>; <br />
        &#8194;&#8194;<span className="cc-blue">const</span> residence ={" "}
        <span className="cc-green">"Mombaça, Ceará"</span> <br />
        &#8194;&#8194;<span className="cc-blue">const</span> openToWork ={" "}
        <span className="cc-blue">true</span>; <br />
        <br />
        &#8194;&#8194;<span className="cc-blue">return</span> &#40;
        <br />
        &#8194;&#8194;&#8194;&#8194;&lt;div&gt;
        <br />
        &#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&lt;&lt;h1&gt;&#123;name&#125;&lt;&#47;h1&gt;
        <br />
        &#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&lt;p&gt;Cargo:
        &#123;position&#125;&lt;&#47;p&gt;
        <br />
        &#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&lt;p&gt;Idade:
        &#123;age&#125; anos&lt;&#47;p&gt;
        <br />
        &#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&lt;p&gt;Residencia:
        &#123;residence&#125;&lt;&#47;h1&gt;
        <br />
        &#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&lt;p&gt;&#123;openToWork ?
        "Open to work" : "Not available for work"&#125;&lt;&#47;p&gt;
        <br />
        &#8194;&#8194;&#8194;&#8194;&lt;&#47;div&gt;
        <br />
        &#8194;&#8194;&#41;&#59;
        <br />
        &#125;
        <br />
        <br />
        <span className="cc-blue">export default</span>{" "}
        <span className="cc-red">MyInfo</span>;
      </pre>
    </div>
  );
}

export default CodeBox;
