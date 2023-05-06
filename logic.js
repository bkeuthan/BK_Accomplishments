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
        responseContainer.innerHTML = '<div class="dynamic-response">Lead design & engineering of entire workflow infrastructure to establish audit standardized controls for the Bridgewater Corporate Actions Middle Office at BNY Mellon by combining my VBA & SQL skillset. Accomplished this with a combination of VBA Macros with a Daily Summary file working as the centralized hub. This design was able to connect all outputs on an individual & team basis to eliminate almost all manual touch points for metric keeping. This saved hundreds of manual processing hours throughout a year. Focusing on the Processing & Payments side of Corporate Actions, the data model is a combination of 9 different VBA macros connecting data from various sources and SQL files. These range from improvements on Market Scrubbing for CA Events, Dividend Upload Automation, Dividend Accrual Tracking, Prime Broker & Custodian Reconciliations, and overall metric keeping.</div>';
        break;
      case 'accomplishment-2':
        responseContainer.innerHTML = '<div class="dynamic-response">Over the past 5-6 years at BNY Mellon, I have demonstrated continued career progression and increasing levels of ownership; starting as a contractor, I quickly proved myself as a competent team player and was brought on full-time as an Analyst within just 3 months. I am now Team Lead & Supervisor for the Corporate Actions Middle Office team servicing BNY flagship client Bridgewater Associates managing a team of 10-12 individuals. I attribute this to a mix of delivering positive impact to the business (ie: elimination of Manual Touch Points), enjoying collaboration across the team and other functions, mentoring junior colleagues (ie: running a training session on Corporate Action Event Processing), a continued desire to always challenge the status quo and laser focus on Bridgewaters satisfaction (ie: receiving high praise from BW Tax Advisors by creating a highly detailed analysis report for Cash Dividend Tax Exceptions on a Semi-Annual basis.).</div>';
        break;
      case 'accomplishment-3':
        responseContainer.innerHTML = '<div class="dynamic-response">One of my most notable accomplishments at BNY Mellon has been the creation of the Prime Broker (PB) & Custodian Portal Tracking Tool. The initial design was a user developed technology (UDT) using VBA to help automate a tracking system to identify New & Updated Corporate Action Event Notifications. The basic concept of the design was to pull all PB & Custodian event notice extracts into a VBA Macro and compare for updates day over day and create a summary of changes. This tool was able to compare thousands of records and consolidate results into several dozen updates that required review. After putting this UDT into production, multiple clients under BNY Mellon wanted to use this technology. As a result, the tool was moved from Excel into a UI interface after working with technology to implement design across multiple BNY Middle Office clients. This has resulted in higher efficiency for Corporate Action Event Tracking (eliminates anywhere from 1-2 hours a day of review depending on the client) and removing risk of human error on this reconciliation.</div>';
        break;
      case 'accomplishment-4':
        responseContainer.innerHTML = '<div class="dynamic-response">Recognizing the increasing importance of data and analytics in the business world, I decided to further develop my technical toolkit by taking on an intensive Data Analysis & Visualization Bootcamp at my alma mater. Completed in tandem with my full-time job, I now have deep knowledge of Python, Pandas, Matplotlib, HTML, JavaScript, Tableau and Machine Learning, in addition to further refining my coding background in VBA and SQL. This intensive program has opened the doors to exciting new opportunities and has elevated my knowledge base to new heights when it comes to coding. The workload was a grueling experience demanding 20-30 hours a week while continuing to exceed expectations working my full time (45+ hour) job at BNY Mellon.</div>';
        break;
      case 'accomplishment-5':
        responseContainer.innerHTML = '<div class="dynamic-response">My love and passion for sports have grown steadily throughout my life and consider myself a 2-sport athlete growing up. In baseball, two of my largest accomplishments were making multiple All-Star teams and pitching a No-Hitter in an All-Star Tournament game. In basketball, I was the starting SG for my AAU team that went on to win 3 different tournament championships, one of which I was recognized making 1st team All-Tournament Team after making 7 3-Pointers in a single game. Sports, fitness, & health remain a crucial part of my life. When the pandemic began, I took a negative of the shut down and turned it into a positive in a way by going through the most rigorous exercise program in my life. I went through a 100-day challenge, training in the gym before sunrise, 86 out of 100 days (resting on Sundays), leading to a full lifestyle transformation bettering my overall health and wellbeing (ie: progression lead from running just under a 9-minute mile to a 7-minute mile while seeing over a 35% increase in strength across multiple muscle groups after this program.).</div>';
        break;

      default:
        responseContainer.innerHTML = '';
    }

    // Remove the "hidden" class to show the response container
    responseContainer.classList.remove('hidden');

  });
});



