const core = require('@actions/core')
// const github = require('@actions/github')
const exec = require('@actions/exec')

function run() {
    // Get some input values
    const bucket = core.getInput('bucket', {required: true});
    const bucketRegion = core.getInput('bucket-region', {required: true});
    const distFolder = core.getInput('dist-folder', {required: true});

    // Upload files
    const s3Uri = `s3://${bucket}`
 // exec.exec(`aws S3 sync ${distFolder} ${s3Uri} --region ${bucketRegion}`)
    exec.exec(`echo ${{s3Uri}}`)

    const websiteURL = `http://${bucket}.s3-website-${bucketRegion}.amazonaws.com`;
    core.setOutput('website-url', websiteURL);
    core.notice('Hello from my custom javascript action.')
}

run();