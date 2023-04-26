// Get the buttons and the response container
const buttons = document.querySelectorAll('.my-button');
const responseContainer = document.getElementById('response-container');

// Add click event listener to each button
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the button ID
    const buttonId = button.getAttribute('id');

    // Load the corresponding response into the response container
    switch (buttonId) {
      case 'accomplishment-1':
        responseContainer.innerHTML = '<div class="dynamic-response">Lead design & engineering of entire workflow infrastructure to establish audit standardize controls for Bridgewater Corporate Actions Middle Office at BNY Mellon by combining my VBA & SQL Skillset. Accomplished this with a combination of VBA Macros with a Daily Summary file working as the centralized hub. This design was able to connect all outputs on an individual & team basis to eliminate almost all manual touch points for metric keeping and saved hundreds of manual processing hours. Focusing on Processing & Payments side of Corporate Actions, the data model is a combination of 9 different VBA macros connecting data from various sources and SQL files. These range from improvements on Market Scrubbing for CA Events, Custody Website/Notice Tracking, Dividend Upload Automation, Dividend Accrual Tracking, Prime Broker & Custodian Reconciliations, and overall metric keeping.</div>';
        break;
      case 'accomplishment-2':
        responseContainer.innerHTML = '<div class="dynamic-response">My promotion to Team Lead & Supervisor for Corporate Action Middle Office team for the client Bridgewater Associates. My ascent within BNY has been a steady climb since joining in 2017. Starting as a Contracted Employee, I quickly proved myself and was brought on full-time as an Analyst within just 3 months. I have continued to rise through the corporate ladder and am now in a leadership position where I am able to serve as a mentor to my colleagues. It is a humbling experience to be in this role, as I greatly admired the very individual in this role who mentored me when I first joined the bank. Witnessing my career growth is a huge accomplishment by seeing my progression going from The Trainee to becoming The Trainer.</div>';
        break;
      case 'accomplishment-3':
        responseContainer.innerHTML = '<div class="dynamic-response">My Data Analysis & Visualization Bootcamp was a huge achievement that required both a great deal of initiative to begin the program and extreme dedication to finish. Over 24 weeks, I dedicated countless hours to mastering the fundamentals of Python, Pandas, MatPlotLib, HTML, JavaScript, Tableau, & Machine Learning. As well as refining my coding knowledge in VBA and SQL. Despite the grueling workload and the demands of a full-time job, I persevered, putting in long days and weekends to perfect my coding skills. This intensive program has opened the doors to exciting new opportunities and has elevated my knowledge base to new heights when it comes to coding.</div>';
        break;
      case 'accomplishment-4':
        responseContainer.innerHTML = '<div class="dynamic-response">My college education is the cornerstone of my achievements throughout my career. I began this journey at Eastern Florida State College, where I obtained my AA degree, and continued my education at the University of Central Florida, where I graduated with my bachelors degree in finance. My passion for the field drove me to work hard and stay dedicated, culminating in a cumulative GPA of 3.2. The knowledge base and skills I acquired during my time at these institutions have played an instrumental role in shaping my professional success.</div>';
        break;
      case 'accomplishment-5':
        responseContainer.innerHTML = '<div class="dynamic-response">My love and passion for sports have grown steadily throughout my life, instilling in me the values of teamwork, hard work, and dedication. I would consider myself a 2-sport athlete. In baseball, two of my largest accomplishments were making multiple All-Star teams and pitching a No-Hitter in an All-Star Tournament game. In basketball, I made my High School team and won multiple AAU tournament championships. Even today, sports events remain a major hobby of mine, and I consider it a significant milestone that I was able to fulfill a dream of becoming a Season Ticket Holder for the Orlando Magic last year.</div>';
        break;
      case 'accomplishment-6':
        responseContainer.innerHTML = '<div class="dynamic-response">Will keep the last one short and simple - Any positive impact I have been able to make on others lives. From family to friends to colleagues to classmates to teammates to random strangers. Always do my best to put others first and I am thankful for all the connections I have been able to make throughout my life.</div>';
        break;
      default:
        responseContainer.innerHTML = '';
    }

    // Remove the "hidden" class to show the response container
    responseContainer.classList.remove('hidden');

  });
});



