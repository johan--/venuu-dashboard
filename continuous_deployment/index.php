<?php
/** 
  * INSTRUCTIONS:
  * 1. Set variables
  * 2. Allow HTTP requests to this script (for example nginx, apache) 
  * 3. Make sure the user running AND owning this script has rights to write to the directory of the script 
  * 4. Make sure the user running AND owning this script has sudo rights to continuous_delivery.sh   
  * 5. Set up a webhook with a JSON body containing field 'payload' (or edit this script to accept other HTTP requests) 
  *
**/

// Set Variables
$LOCAL_ROOT         = "/srv/hook/";
$LOCAL_REPO_NAME    = "venuu-dashboard";
$LOCAL_REPO         = "{$LOCAL_ROOT}/{$LOCAL_REPO_NAME}";
$REMOTE_REPO        = "https://github.com/venuu/venuu-dashboard.git";
$CDUSER             = "ohtu";
//$BRANCH             = "master";

//log time of running script
shell_exec('echo HTTP request to hook index.php at: $(date) >> ' . $LOCAL_ROOT . '/hooklog.txt'); 

$body = json_decode(file_get_contents('php://input'), true);

if ( $body['payload'] ) {
  // Only respond to POST requests with 'payload' in JSON body (Circle-CI)

  if( file_exists($LOCAL_REPO) ) {
    $result = shell_exec("cd {$LOCAL_REPO} && git pull");
  } else {
    $result = shell_exec("cd {$LOCAL_ROOT} && git clone {$REMOTE_REPO}");
  }

  if(!preg_match('/Already up-to-date/', $result)) {
    //only update production if there was changes in repo
    shell_exec('echo starting continuos delivery script at: $(date) >> ' . $LOCAL_ROOT . '/hooklog.txt');
    shell_exec('sudo -H -u' . $CDUSER . ' ' . $LOCAL_ROOT . '/continuous_delivery.sh');
    die();
  }
  //POST with payload but repo not updated
  shell_exec('echo local repo was already up-to-date, exit hook at: $(date) >> ' . $LOCAL_ROOT . '/hooklog.txt');
  die("already up-to-date" . mktime());
}

//GET index.php and other requests without 'payload' field
die("listening for webhook " . mktime());
?>
