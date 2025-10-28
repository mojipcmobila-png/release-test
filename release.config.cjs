/**
 * @type {import('semantic-release').GlobalConfig}
 */
module.exports = {
    repositoryUrl: 'https://github.com/mojipcmobila-png/release-test',
    branches: [
        'main',
        {
            name: "develop",
            channel: "beta",
            prerelease: "beta",
        }
    ],
    plugins: [
        '@semantic-release/commit-analyzer',
        [
            '@semantic-release/release-notes-generator',
            {
                preset: 'conventionalcommits',
                presetConfig: {
                    types: [
                        { type: 'feat', section: '🚀 Features', hidden: false },
                        { type: 'fix', section: '🐞 Bug Fixes', hidden: false },
                        { type: 'chore', section: '🧹 Chores', hidden: false },
                        { type: 'docs', section: '📚 Documentation', hidden: false },
                        { type: 'refactor', section: '🔧 Refactoring', hidden: false },
                        { type: 'perf', section: '⚡ Performance', hidden: false },
                        { type: 'test', section: '✅ Tests', hidden: false },
                        { type: 'style', section: '🎨 Styles', hidden: false }
                    ]
                }
            }
        ],
        '@semantic-release/changelog',
        '@semantic-release/npm',
        '@semantic-release/git',
        '@semantic-release/github',
        [
            "@semantic-release/exec",
            {
                "successCmd": "echo 'new_version=${nextRelease.version}' >> $GITHUB_OUTPUT"

            }
        ]
    ]
}
