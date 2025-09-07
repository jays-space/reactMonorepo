import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';
import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      bundler: 'vite',
      webServerCommands: {
        default: 'npx nx run @reactmonorepo/advancedReactSandbox:dev',
        production: 'npx nx run @reactmonorepo/advancedReactSandbox:preview',
      },
      ciWebServerCommand:
        'npx nx run @reactmonorepo/advancedReactSandbox:preview',
      ciBaseUrl: 'http://localhost:4200',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
