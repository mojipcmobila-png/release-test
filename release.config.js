module.exports = {
    // repositoryUrl: 'https://github.com/mojipcmobila-png/release-test',
    branches: [
        'main',
        {
            name: "develop",
            channel: "beta",
            prerelease: true
        }
    ],
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        '@semantic-release/changelog',
        '@semantic-release/git',
        '@semantic-release/github',
        "@semantic-release/npm"
    ]
}
