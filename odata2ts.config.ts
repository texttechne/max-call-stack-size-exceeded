import { ConfigFileOptions, EmitModes, Modes, TypeModel } from "@odata2ts/odata2ts";

const config: ConfigFileOptions = {
  debug: false,
  mode: Modes.service,
  emitMode: EmitModes.ts,
  prettier: true,
  services: {
    // dynamics: {
    //   serviceName: "Dynamics",
    //   mode: Modes.service,
    //   source: "odata/dynamics.xml",
    //   output: "build/dynamics",
    //   allowRenaming: true,
    //   bundledFileGeneration: false,
    //   byTypeAndName: [
    //     {
    //       type: TypeModel.EntityType,
    //       name: "solution",
    //       mappedName: "SolutionEntity",
    //     },
    //   ],
    // },
    casePacer: {
      emitMode: EmitModes.ts,
      mode: Modes.service,
      bundledFileGeneration: false,
      serviceName: "CasePacer",
      source: "odata/casePacer.xml",
      output: "build/casePacer",
    },
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
