import { ConfigFileOptions, EmitModes, Modes, TypeModel } from "@odata2ts/odata2ts";

const config: ConfigFileOptions = {
  debug: false,
  mode: Modes.service,
  emitMode: EmitModes.ts,
  prettier: true,
  services: {
    // the failure case: generation succeeds, compiling doesn't
    casePacer: {
      // you could switch this to Modes.qobjects and compilation succeeds => problem only occurs with generated service files
      mode: Modes.service,
      bundledFileGeneration: false,
      serviceName: "CasePacer",
      source: "odata/casePacer.xml",
      output: "build/casePacer",
    },
    casePacerBundled: {
      mode: Modes.service,
      // to work around circular dependencies (same stuff is put into the same file, generating only 3 files in total)
      // => different compilation error
      bundledFileGeneration: true,
      serviceName: "CasePacer",
      source: "odata/casePacer.xml",
      output: "build/casePacerBundled",
    },
    // works fine
    trippin: {
      bundledFileGeneration: false,
      source: "odata/trippin.xml",
      output: "build/trippin",
    },
    // works fine, even with circular dependencies
    trippinBi: {
      bundledFileGeneration: false,
      source: "odata/trippin-bidirectional.xml",
      output: "build/trippinBi",
    }
  },
};

export default config;
