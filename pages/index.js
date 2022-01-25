import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Love for SUIMSUIM</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="heart">&#x2665;</div>
        <p className="description line-1 anim-typewriter">
          I'TS NOT FUNNEEEEH BAE, I LOVE YOU SO MUUUCH...
        </p>
      </main>

      <style jsx>{`
        .line-1{
          position: relative;
          top: 50%;  
          width: 24em;
          margin: 0 auto;
          border-right: 2px solid rgba(255,255,255,.75);
          font-size: 180%;
          text-align: center;
          white-space: nowrap;
          overflow: hidden;
          transform: translateY(-50%);    
      }
      
      /* Animation */
      .anim-typewriter{
        animation: typewriter 4s steps(44) 1s 1 normal both,
                   blinkTextCursor 500ms steps(44) infinite normal;
      }
      @keyframes typewriter{
        from{width: 0;}
        to{width: 24em;}
      }
      @keyframes blinkTextCursor{
        from{border-right-color: rgba(255,255,255,.75);}
        to{border-right-color: transparent;}
      }
        .heart {
          font-size: 150px;
          color: #e00;
          animation: beat .25s infinite alternate;
          transform-origin: center;
        }
        
        /* Heart beat animation */
        @keyframes beat{
          to { transform: scale(1.4); }
        }
        
        /* we are using prefix free for this example
        
        for prefixed code it would look like this
        
        
        body {
          text-align: center;
        }
        
        
        .heart {
          font-size: 150px;
          color: #e00;
        
          -webkit-animation: beat .25s infinite alternate;
          -moz-animation: beat .25s infinite alternate;
          -ms-animation: beat .25s infinite alternate;
          -o-animation: beat .25s infinite alternate;
          animation: beat .25s infinite alternate;
        
          -webkit-transform-origin: center;
          -moz-transform-origin: center;
          -o-transform-origin: center;
          -ms-transform-origin: center;
          transform-origin: center;
        }
        
        
        @keyframes "beat" {
         to {
            -webkit-transform: scale(1.4);
             -moz-transform: scale(1.4);
             -o-transform: scale(1.4);
             -ms-transform: scale(1.4);
             transform: scale(1.4);
         }
        
        }
        
        @-moz-keyframes beat {
         to {
           -moz-transform: scale(1.4);
           transform: scale(1.4);
         }
        
        }
        
        @-webkit-keyframes "beat" {
         to {
           -webkit-transform: scale(1.4);
           transform: scale(1.4);
         }
        
        }
        
        @-ms-keyframes "beat" {
         to {
           -ms-transform: scale(1.4);
           transform: scale(1.4);
         }
        
        }
        
        @-o-keyframes "beat" {
         to {
           -o-transform: scale(1.4);
           transform: scale(1.4);
         }
        
        } */
        
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
