/*
 * @Author: Low Ze Sheng
 * @Date: 2024-04-12 
 * @LastEditTime: 2023-07-15 4.16pm
 * @Description: X Layer doc structure
 */

module.exports = [
    {
      title: 'Users',
      basePath: ['/users'],
      children: [
        {
          title: 'Welcome',
          icon: 'okds-finance-bank',
          children: [
            '/users/welcome/about-x-layer',
            {
              title: 'Move funds to X Layer',
              path: '/users/move-your-funds/move-funds-to-x-layer',
              children: [
                  '/users/move-your-funds/set-up-wallets',
                  '/users/move-your-funds/fund-your-account',
                  '/users/move-your-funds/bridge-funds-to-xlayer',
              ],
          }, 
        ],
        },
      ],
    },
    {
      title: 'Developers',
      basePath: ['/developer'],
      children: [
        {
          title: 'Build on X Layer',
          icon: 'okx-defi-okbc-resources',
          children: [
            '/developer/build-on-xlayer/about-xlayer',

          {
            title:'Network information and contracts',
            path: '/developer/build-on-xlayer/network-information',
            children: [
                '/developer/build-on-xlayer/zkevm-contracts',
                '/developer/build-on-xlayer/safe-wallet',
              ],
          }, 

          {
            title:'Deploy a smart contract',
            path: '/developer/deploy-a-smart-contract/deploying-contract',
            children: [
                '/developer/deploy-a-smart-contract/deploy-with-hardhat',
                '/developer/deploy-a-smart-contract/deploy-with-foundry',
                '/developer/deploy-a-smart-contract/deploy-with-truffle'
              ],
          },

          {
            title:'Verify a smart contract',
            path: '/developer/verify-a-smart-contract/verifying-contract',
            children: [
                '/developer/verify-a-smart-contract/manual-verification',
                '/developer/verify-a-smart-contract/verify-with-foundry',
                '/developer/verify-a-smart-contract/verify-with-hardhat',
              ],
          },

          {
            title:'Receive and bridge testnet OKB tokens',
            path: '/developer/bridge/overview',
            children: [
              '/developer/bridge/get-testnet-okb-from-faucet',
              '/developer/bridge/bridge-testnet-assets',
              '/developer/bridge/asset-transfer',
              '/developer/bridge/flow-of-assets',
              '/developer/bridge/bridging-usdc-workflow',
            ],
          },

          {
            title:'Setup nodes',
            path: '/developer/setup-zknode/setup',
            children: [
              '/developer/setup-zknode/setup-local-zknode',
              '/developer/setup-zknode/setup-production-zknode'
            ],
          },
            '/developer/rpc-endpoints/rpc-endpoints',
            '/developer/websockets-endpoints/websocket-endpoints',
            '/developer/gas-station/setup',
          ]
        },
        {
          title:'Architecture',
          icon:'okx-defi-okbc-resources',
          children:[
            {
              title:'Developer guides',
              path: '/developer/architecture/overview',
              children: [
                '/developer/architecture/x-layer-architecture',
                '/developer/architecture/state-management',
              {
                title: 'Transactions',
                path: '/developer/architecture/transactions',
                children: [
                  '/developer/architecture/transactions-n-data-flow',
                  '/developer/architecture/transactions-batching',
                  '/developer/architecture/batch-sequencing',
                  '/developer/architecture/batch-aggregation',
                  '/developer/architecture/transaction-validation',
                  ],
              },
              '/developer/architecture/incentive-model',

              ],
            }, 
            ],
        },
        {
          title: 'Tooling and infrastructure',
          icon: 'okx-defi-okbc-resources',
          children:[
            {
            title:'Tools',
            path: '/developer/tools/overview',
            children:[
            {
              title:'Account abstraction',
              path:'/developer/tools/account-abstraction-overview',
              children: [
                '/developer/tools/account-abstraction/particle-network',
                '/developer/tools/account-abstraction/safe',
              ],
            },
            {
              title:'Block explorers',
              path:'/developer/tools/block-explorers-overview',
              children: [
                '/developer/tools/block-explorers/l2scan-explorer',
              ]
            },
            {
              title:'Cross-chain',
              path:'/developer/tools/cross-chain-overview',
              children: [
                '/developer/tools/cross-chain/layer-zero',
                '/developer/tools/cross-chain/wormhole',
                '/developer/tools/cross-chain/connext',
              ]
            },
            {
              title:'Data indexers',
              path:'/developer/tools/data-indexers-overview',
              children: [
                '/developer/tools/data-indexers/the-graph',
                '/developer/tools/data-indexers/envio',
                '/developer/tools/data-indexers/goldsky',
                '/developer/tools/data-indexers/subquery',
                '/developer/tools/data-indexers/subsquid',
              ]
            },
            {
              title:'Developer tools',
              path:'/developer/tools/dev-tooling-overview',
              children: [
                '/developer/tools/dev-tooling/sentio',
                '/developer/tools/dev-tooling/thirdweb'
              ]
            },
            {
              title:'Node providers',
              path:'/developer/tools/node-providers-overview',
              children: [
                '/developer/tools/node-providers/zan',
                '/developer/tools/node-providers/ankr',
              ]
            },
            {
              title:'Oracles',
              path:'/developer/tools/oracles-overview',
              children: [
                '/developer/tools/oracles/api3',
                '/developer/tools/oracles/band-protocol',
                '/developer/tools/oracles/supraoracles',
                '/developer/tools/oracles/redstone',
                '/developer/tools/oracles/umbrella',
              ]
            },
            {
              title:'User onboarding',
              path: '/developer/tools/user-onboarding',
              children: [
                '/developer/tools/user-onboarding/privy',
              ]
            },
          ],
        },
        ],
        },
      ],
      },
      {
        title: 'Academy',
        basePath: ['/academy'],
        children: [
          {
            title: 'Learn',
            icon: 'okds-finance-bank',
            children: [
              '/academy/getting-started/start-learning',
              '/academy/getting-started/erc-20-tokens',
            ],
          },
          {
            title:'Learn solidity',
            icon:'okds-guide',
            children: [
              '/academy/learn-solidity/introduction-to-solidity',
              '/academy/learn-solidity/gas-fees',
              '/academy/learn-solidity/contract-size-limit',
              '/academy/learn-solidity/stack-limit',
              '/academy/learn-solidity/permanence',
              '/academy/learn-solidity/update-frequency',
            ],
          },
          {
            title: 'Try remix',
            icon: 'okds-guide',
            children: [
              '/academy/try-remix/remix-overview',
              '/academy/try-remix/features',
              '/academy/try-remix/tutorial-guide'
          ],
          },
        ],
      },
  
    ]

