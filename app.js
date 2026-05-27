const pathways = [
  {
    id: "corticospinal",
    name: "Corticospinal Tract",
    type: "Motor",
    color: "#f0b24d",
    description: "Voluntary movement, pyramidal decussation, UMN signs",
    origin: "Primary motor cortex",
    decussation: "Pyramidal decussation in caudal medulla",
    rule: "Above medulla: contralateral weakness; below medulla: ipsilateral weakness",
    decussationPoint: { x: 500, y: 508 },
    labels: {
      origin: { text: "Motor cortex", x: 622, y: 110, lx: 590, ly: 120 },
      decussation: { text: "Pyramidal decussation", x: 535, y: 516, lx: 500, ly: 508 },
    },
    normal: {
      summary:
        "Motor command descends from cortex, crosses at the caudal medulla, and activates the opposite spinal cord without interruption.",
      motor: "Full voluntary strength with normal tone",
      sensory: "No primary sensory deficit",
      reflexes: "Physiologic reflexes without pathologic Babinski sign",
      laterality: "No lateralized deficit",
      clue: "Use this intact view to anchor where laterality flips from contralateral to ipsilateral.",
      reasoning: [
        "The tract begins in motor cortex and descends through the internal capsule and brainstem.",
        "Fibers cross at the pyramidal decussation in the caudal medulla.",
        "After crossing, the lateral corticospinal tract controls the ipsilateral spinal cord.",
        "With no lesion, downstream motor neurons receive normal descending drive.",
      ],
    },
    segments: [
      { id: "cst-1", d: "M590 120 C585 170 570 210 550 250" },
      { id: "cst-2", d: "M550 250 C540 300 530 350 516 420" },
      { id: "cst-3", d: "M516 420 C514 458 508 485 500 508" },
      { id: "cst-4", d: "M500 508 C478 526 456 555 442 600" },
      { id: "cst-5", d: "M442 600 C434 628 426 650 418 672" },
    ],
    lesions: [
      {
        id: "right-internal-capsule",
        code: "CST-01",
        name: "Right internal capsule",
        short: "Compact supratentorial motor lesion",
        coord: { x: 550, y: 250 },
        affectedSegments: ["cst-2", "cst-3", "cst-4", "cst-5"],
        signal: "Interrupted above decussation",
        laterality: "Contralateral",
        findingTitle: "Left upper motor neuron weakness",
        summary:
          "A right internal capsule lesion interrupts corticospinal fibers before pyramidal decussation, producing contralateral weakness.",
        motor: "Left face, arm, and leg UMN weakness",
        sensory: "No primary sensory tract selected",
        reflexes: "Left-sided hyperreflexia with Babinski sign",
        clinicalLaterality: "Contralateral to lesion",
        clue: "Face, arm, and leg together points to a compact supratentorial motor pathway.",
        reasoning: [
          "Motor fibers descend from the right motor cortex through a tightly packed internal capsule.",
          "The fibers have not crossed yet; the corticospinal crossing occurs lower in the caudal medulla.",
          "After the medullary decussation, those right cortical fibers control the left side of the body.",
          "Because this is an upper motor neuron pathway, reflexes become brisk below the interruption.",
        ],
      },
      {
        id: "right-cerebral-peduncle",
        code: "CST-02",
        name: "Right cerebral peduncle",
        short: "Brainstem motor tract before crossing",
        coord: { x: 530, y: 350 },
        affectedSegments: ["cst-2", "cst-3", "cst-4", "cst-5"],
        signal: "Interrupted above decussation",
        laterality: "Contralateral",
        findingTitle: "Left UMN weakness below the face pattern",
        summary:
          "The lesion is still rostral to pyramidal decussation, so right descending motor fibers fail to reach the left body.",
        motor: "Left arm and leg UMN weakness; face may be involved depending on corticobulbar spread",
        sensory: "Primary sensory findings require adjacent tract involvement",
        reflexes: "Left hyperreflexia and extensor plantar response",
        clinicalLaterality: "Contralateral to lesion",
        clue: "Contralateral weakness with brainstem signs localizes to the descending motor tract in the brainstem.",
        reasoning: [
          "The corticospinal tract remains uncrossed in the cerebral peduncle.",
          "A right-sided lesion therefore removes motor command destined for the left spinal cord.",
          "Corticobulbar and nearby cranial nerve findings can refine the exact midbrain localization.",
          "The downstream spinal motor neurons are intact, so the pattern is upper motor neuron weakness.",
        ],
      },
      {
        id: "right-medullary-pyramid",
        code: "CST-03",
        name: "Right medullary pyramid",
        short: "Last segment before pyramidal crossing",
        coord: { x: 516, y: 420 },
        affectedSegments: ["cst-3", "cst-4", "cst-5"],
        signal: "Interrupted before crossing",
        laterality: "Contralateral",
        findingTitle: "Left pyramidal weakness",
        summary:
          "A pyramid lesion catches corticospinal fibers just before decussation, so the deficit is still contralateral.",
        motor: "Left arm and leg UMN weakness; face often relatively spared",
        sensory: "No dorsal column or spinothalamic loss unless medial/lateral medulla is involved",
        reflexes: "Left hyperreflexia below the lesion",
        clinicalLaterality: "Contralateral to lesion",
        clue: "Pure motor weakness with medullary localization suggests pyramid involvement.",
        reasoning: [
          "The medullary pyramid contains descending corticospinal fibers before they cross.",
          "Right pyramid fibers are still carrying commands for the left body.",
          "The lesion blocks the tract immediately before decussation, so all lower downstream fibers are underdriven.",
          "Clinical localization depends on whether adjacent medial medullary structures are also affected.",
        ],
      },
      {
        id: "left-cervical-cord",
        code: "CST-04",
        name: "Left lateral cervical cord",
        short: "Post-decussation spinal tract lesion",
        coord: { x: 442, y: 600 },
        affectedSegments: ["cst-5"],
        signal: "Interrupted below decussation",
        laterality: "Ipsilateral",
        findingTitle: "Left UMN weakness below the lesion",
        summary:
          "Below the pyramidal decussation, corticospinal fibers run ipsilaterally in the lateral cord, so a left cord lesion weakens the left body below that level.",
        motor: "Left-sided UMN weakness below the cervical level; face spared",
        sensory: "Sensory loss depends on dorsal column or spinothalamic involvement",
        reflexes: "Left hyperreflexia below the lesion, possible segmental LMN signs at the level",
        clinicalLaterality: "Ipsilateral below lesion",
        clue: "Face sparing plus a sensory level pushes localization from brain to spinal cord.",
        reasoning: [
          "The corticospinal tract crossed earlier at the caudal medulla.",
          "Once in the spinal cord, each lateral corticospinal tract controls the same side of the body.",
          "A cervical interruption affects motor output below that spinal level while sparing the face.",
          "Reflex changes are upper motor neuron signs below the lesion, with possible lower motor neuron signs at the injured segment.",
        ],
      },
    ],
  },
  {
    id: "dorsal-column",
    name: "Dorsal Column-Medial Lemniscus",
    type: "Sensory",
    color: "#58a9ff",
    description: "Vibration, proprioception, fine touch, medullary crossing",
    origin: "Peripheral receptors via dorsal root ganglion",
    decussation: "Internal arcuate fibers in caudal medulla",
    rule: "Cord lesion: ipsilateral loss; above medulla: contralateral loss",
    decussationPoint: { x: 506, y: 382 },
    labels: {
      origin: { text: "Body sensory input", x: 276, y: 674, lx: 420, ly: 672 },
      decussation: { text: "Medullary sensory crossing", x: 540, y: 392, lx: 506, ly: 382 },
    },
    normal: {
      summary:
        "Large-fiber sensory information ascends ipsilaterally in the cord, crosses in the medulla, and reaches the opposite thalamus and sensory cortex.",
      motor: "No motor deficit",
      sensory: "Normal vibration, proprioception, and discriminative touch",
      reflexes: "Normal reflexes if sensory roots and motor arc are intact",
      laterality: "No lateralized deficit",
      clue: "The intact map shows why cord lesions stay ipsilateral while brainstem or thalamic lesions become contralateral.",
      reasoning: [
        "Dorsal column modalities enter through the dorsal root ganglion.",
        "They ascend in the ipsilateral posterior column of the spinal cord.",
        "They cross in the caudal medulla as internal arcuate fibers.",
        "After crossing, the medial lemniscus carries the opposite body side upward.",
      ],
    },
    segments: [
      { id: "dc-1", d: "M420 672 C430 640 438 615 448 588" },
      { id: "dc-2", d: "M448 588 C454 545 460 505 468 470" },
      { id: "dc-3", d: "M468 470 C477 430 490 400 506 382" },
      { id: "dc-4", d: "M506 382 C538 348 560 318 580 280" },
      { id: "dc-5", d: "M580 280 C604 238 620 200 636 156" },
    ],
    lesions: [
      {
        id: "left-dorsal-root",
        code: "DCML-01",
        name: "Left dorsal root",
        short: "Peripheral sensory entry lesion",
        coord: { x: 420, y: 672 },
        affectedSegments: ["dc-1", "dc-2", "dc-3", "dc-4", "dc-5"],
        signal: "Input lost before ascent",
        laterality: "Ipsilateral",
        findingTitle: "Left dermatomal loss of vibration and position sense",
        summary:
          "A dorsal root lesion removes incoming large-fiber sensory information before it can enter the ipsilateral dorsal column.",
        motor: "No corticospinal weakness from this tract alone",
        sensory: "Left dermatomal loss of vibration, proprioception, and discriminative touch",
        reflexes: "Reduced reflex at the affected root if the afferent limb is involved",
        clinicalLaterality: "Ipsilateral at root level",
        clue: "Dermatomal sensory loss with a depressed segmental reflex points to root localization.",
        reasoning: [
          "Dorsal column modalities enter through the dorsal root ganglion and dorsal root.",
          "The signal has not ascended or crossed yet.",
          "Loss remains ipsilateral and segmental at the involved root.",
          "A reflex can drop because the sensory afferent limb of the reflex arc is interrupted.",
        ],
      },
      {
        id: "left-dorsal-column-t8",
        code: "DCML-02",
        name: "Left dorsal column T8",
        short: "Cord lesion before medullary crossing",
        coord: { x: 448, y: 588 },
        affectedSegments: ["dc-2", "dc-3", "dc-4", "dc-5"],
        signal: "Interrupted before decussation",
        laterality: "Ipsilateral",
        findingTitle: "Left loss of vibration and proprioception below T8",
        summary:
          "The dorsal column ascends ipsilaterally in the cord, so a left T8 lesion affects left-sided dorsal column modalities below the level.",
        motor: "No primary motor deficit unless corticospinal tract is also involved",
        sensory: "Left vibration, proprioception, and fine-touch loss below T8",
        reflexes: "Usually preserved unless the lesion includes segmental roots or anterior horn",
        clinicalLaterality: "Ipsilateral below lesion",
        clue: "Ipsilateral loss of position and vibration below a level localizes to the dorsal column.",
        reasoning: [
          "Large-fiber sensory signals enter the cord and ascend on the same side.",
          "They do not cross until the caudal medulla.",
          "A left T8 dorsal column lesion blocks left-sided information from lower segments.",
          "Pain and temperature may remain intact because they use the spinothalamic pathway.",
        ],
      },
      {
        id: "right-medial-lemniscus-pons",
        code: "DCML-03",
        name: "Right medial lemniscus",
        short: "Post-decussation brainstem sensory lesion",
        coord: { x: 560, y: 318 },
        affectedSegments: ["dc-4", "dc-5"],
        signal: "Interrupted after decussation",
        laterality: "Contralateral",
        findingTitle: "Left loss of vibration and position sense",
        summary:
          "After medullary crossing, the right medial lemniscus carries left body dorsal column modalities toward the thalamus.",
        motor: "No corticospinal deficit from this tract alone",
        sensory: "Left body loss of vibration, proprioception, and fine touch",
        reflexes: "Reflexes usually preserved unless motor pathways are also injured",
        clinicalLaterality: "Contralateral to lesion",
        clue: "Contralateral dorsal column modality loss with brainstem findings suggests medial lemniscus involvement.",
        reasoning: [
          "Dorsal column fibers cross in the caudal medulla as internal arcuate fibers.",
          "After crossing, they ascend as the medial lemniscus on the opposite side.",
          "A right medial lemniscus lesion therefore affects left body sensation.",
          "Motor strength remains normal unless adjacent descending motor fibers are also damaged.",
        ],
      },
      {
        id: "right-vpl",
        code: "DCML-04",
        name: "Right VPL thalamus",
        short: "Thalamic sensory relay lesion",
        coord: { x: 580, y: 280 },
        affectedSegments: ["dc-5"],
        signal: "Relay output interrupted",
        laterality: "Contralateral",
        findingTitle: "Left hemisensory dorsal column loss",
        summary:
          "The right VPL receives already-crossed body sensory input, so thalamic injury produces contralateral sensory loss.",
        motor: "No primary motor deficit from this pathway",
        sensory: "Left-sided loss of dorsal column modalities, often with broader hemisensory findings",
        reflexes: "Reflexes preserved unless motor pathways are involved",
        clinicalLaterality: "Contralateral to lesion",
        clue: "Dense hemisensory loss without a spinal level often localizes to thalamus or sensory cortex.",
        reasoning: [
          "The thalamus receives sensory information after the medullary crossing.",
          "Right VPL represents the left body.",
          "A lesion here removes relay output to sensory cortex.",
          "The deficit is broad because many body regions are represented compactly.",
        ],
      },
    ],
  },
  {
    id: "spinothalamic",
    name: "Spinothalamic Tract",
    type: "Sensory",
    color: "#59d9e8",
    description: "Pain, temperature, crude touch, early spinal crossing",
    origin: "Pain and temperature receptors via dorsal horn",
    decussation: "Anterior white commissure within 1-2 spinal levels",
    rule: "Cord lesion: contralateral pain/temp loss begins below the lesion",
    decussationPoint: { x: 518, y: 598 },
    labels: {
      origin: { text: "Pain/temp input", x: 616, y: 674, lx: 585, ly: 672 },
      decussation: { text: "Early spinal crossing", x: 548, y: 608, lx: 518, ly: 598 },
    },
    normal: {
      summary:
        "Pain and temperature input enters the dorsal horn, crosses early through the anterior white commissure, and ascends contralaterally.",
      motor: "No motor deficit",
      sensory: "Normal pain, temperature, and crude touch transmission",
      reflexes: "Normal reflexes unless nearby segmental structures are affected",
      laterality: "No lateralized deficit",
      clue: "This intact view highlights the early spinal crossing that makes cord lesions contralateral for pain and temperature.",
      reasoning: [
        "Pain and temperature fibers enter the dorsal horn and synapse near the level of entry.",
        "Second-order fibers cross within one to two spinal levels.",
        "After crossing, they ascend in the contralateral anterolateral cord.",
        "The tract reaches thalamic relay nuclei before projecting to sensory cortex.",
      ],
    },
    segments: [
      { id: "st-1", d: "M585 672 C575 650 564 628 552 606" },
      { id: "st-2", d: "M552 606 C520 600 488 596 456 584" },
      { id: "st-3", d: "M456 584 C446 536 444 485 456 438" },
      { id: "st-4", d: "M456 438 C468 380 500 330 542 292" },
      { id: "st-5", d: "M542 292 C574 258 604 212 624 158" },
    ],
    lesions: [
      {
        id: "anterior-white-commissure-t10",
        code: "STT-01",
        name: "Anterior white commissure T10",
        short: "Crossing fibers at spinal level",
        coord: { x: 518, y: 598 },
        affectedSegments: ["st-2"],
        signal: "Segmental crossing interrupted",
        laterality: "Bilateral segmental",
        findingTitle: "Bilateral segmental pain and temperature loss",
        summary:
          "Crossing spinothalamic fibers are vulnerable in the anterior white commissure, causing bilateral pain and temperature loss at the affected segments.",
        motor: "No primary motor deficit from this tract alone",
        sensory: "Bilateral segmental pain and temperature loss around T10",
        reflexes: "Reflexes usually preserved unless anterior horn or roots are involved",
        clinicalLaterality: "Bilateral at lesion level",
        clue: "A suspended segmental pain-temperature deficit suggests central cord or commissural involvement.",
        reasoning: [
          "Pain and temperature fibers enter the dorsal horn and cross early through the anterior white commissure.",
          "A focal commissural lesion catches fibers from both sides while they are crossing.",
          "Dorsal column modalities are spared because they ascend in the posterior cord.",
          "The deficit is segmental rather than a full body hemianesthesia.",
        ],
      },
      {
        id: "left-anterolateral-t10",
        code: "STT-02",
        name: "Left anterolateral cord T10",
        short: "Post-crossing spinal tract lesion",
        coord: { x: 456, y: 584 },
        affectedSegments: ["st-3", "st-4", "st-5"],
        signal: "Interrupted after spinal crossing",
        laterality: "Contralateral",
        findingTitle: "Right pain and temperature loss below T10",
        summary:
          "Spinothalamic fibers cross near entry, then ascend contralaterally, so a left anterolateral cord lesion affects right-sided pain and temperature below the level.",
        motor: "No primary corticospinal weakness from this tract alone",
        sensory: "Right pain and temperature loss beginning a few segments below T10",
        reflexes: "Reflexes preserved unless neighboring motor pathways are involved",
        clinicalLaterality: "Contralateral below lesion",
        clue: "Contralateral pain-temperature loss with preserved vibration points to spinothalamic tract.",
        reasoning: [
          "Pain and temperature fibers cross in the spinal cord shortly after entering.",
          "After crossing, they ascend in the opposite anterolateral cord.",
          "A left T10 tract lesion therefore affects right-sided pain and temperature.",
          "The sensory level begins slightly below the lesion because fibers ascend one to two levels before crossing.",
        ],
      },
      {
        id: "left-lateral-medulla",
        code: "STT-03",
        name: "Left lateral medulla",
        short: "Ascending pain-temperature tract in brainstem",
        coord: { x: 500, y: 330 },
        affectedSegments: ["st-4", "st-5"],
        signal: "Interrupted after crossing",
        laterality: "Contralateral body",
        findingTitle: "Right body pain and temperature loss",
        summary:
          "The left spinothalamic tract in the lateral medulla carries already-crossed pain and temperature information from the right body.",
        motor: "No pure corticospinal weakness from this tract alone",
        sensory: "Right body pain and temperature loss; ipsilateral facial pain loss if spinal trigeminal tract is involved",
        reflexes: "Reflexes usually preserved unless additional pathways are affected",
        clinicalLaterality: "Contralateral body deficit",
        clue: "Crossed body and face pain-temperature findings strongly suggest lateral medulla or lower pons.",
        reasoning: [
          "Body pain and temperature fibers have already crossed in the spinal cord.",
          "The left lateral medulla carries right body pain and temperature signals.",
          "Adjacent spinal trigeminal fibers can create ipsilateral facial pain-temperature loss.",
          "Motor strength may be preserved because the corticospinal tract is more medial.",
        ],
      },
      {
        id: "right-vpl-spinothalamic",
        code: "STT-04",
        name: "Right VPL thalamus",
        short: "Thalamic pain-temperature relay lesion",
        coord: { x: 542, y: 292 },
        affectedSegments: ["st-5"],
        signal: "Relay output interrupted",
        laterality: "Contralateral",
        findingTitle: "Left hemisensory pain and temperature loss",
        summary:
          "The right thalamic relay receives already-crossed body pain and temperature information from the left side.",
        motor: "No primary motor deficit from this pathway",
        sensory: "Left body pain and temperature loss, often with other sensory modalities if the VPL lesion is broad",
        reflexes: "Reflexes preserved unless motor pathways are also affected",
        clinicalLaterality: "Contralateral to lesion",
        clue: "Multi-modal hemisensory loss without a spinal level suggests thalamic localization.",
        reasoning: [
          "The spinothalamic tract has already crossed before reaching the thalamus.",
          "Right VPL represents the left body.",
          "A thalamic lesion blocks relay to sensory cortex.",
          "The clinical pattern may include several sensory modalities because thalamic sensory representations are compact.",
        ],
      },
    ],
  },
  {
    id: "visual",
    name: "Visual Pathway",
    type: "Visual",
    color: "#b48cff",
    description: "Optic nerve, chiasm, tract, radiations, cortex",
    origin: "Retina and optic nerves",
    decussation: "Nasal retinal fibers cross at optic chiasm",
    rule: "Pre-chiasm monocular; chiasm bitemporal; post-chiasm homonymous",
    decussationPoint: { x: 500, y: 260 },
    labels: {
      origin: { text: "Retina", x: 178, y: 205, lx: 190, ly: 238 },
      decussation: { text: "Optic chiasm", x: 526, y: 244, lx: 500, ly: 260 },
    },
    normal: {
      summary:
        "Visual input from both eyes reaches the chiasm, nasal retinal fibers cross, and post-chiasmal pathways organize information by visual field.",
      motor: "No motor deficit",
      sensory: "Full visual fields in both eyes",
      reflexes: "Pupillary light reflexes preserved",
      laterality: "No field deficit",
      clue: "The intact view separates monocular pre-chiasmal logic from homonymous post-chiasmal logic.",
      reasoning: [
        "Each optic nerve carries all visual input from one eye.",
        "Nasal retinal fibers cross at the optic chiasm while temporal retinal fibers stay uncrossed.",
        "Each optic tract carries the contralateral visual field from both eyes.",
        "Optic radiations and visual cortex preserve this visual-field organization.",
      ],
    },
    segments: [
      { id: "v-left-nerve", d: "M190 238 C250 244 310 248 370 254" },
      { id: "v-right-nerve", d: "M810 238 C750 244 690 248 630 254" },
      { id: "v-left-chiasm", d: "M370 254 C420 258 470 260 500 260" },
      { id: "v-right-chiasm", d: "M630 254 C580 258 530 260 500 260" },
      { id: "v-left-tract", d: "M500 260 C440 278 388 306 348 342" },
      { id: "v-right-tract", d: "M500 260 C560 278 612 306 652 342" },
      { id: "v-left-radiation", d: "M348 342 C300 385 270 430 288 482" },
      { id: "v-right-radiation", d: "M652 342 C700 385 730 430 712 482" },
      { id: "v-left-occipital", d: "M288 482 C325 510 360 528 400 542" },
      { id: "v-right-occipital", d: "M712 482 C675 510 640 528 600 542" },
    ],
    lesions: [
      {
        id: "right-optic-nerve",
        code: "VIS-01",
        name: "Right optic nerve",
        short: "Pre-chiasmal monocular lesion",
        coord: { x: 720, y: 246 },
        affectedSegments: ["v-right-nerve", "v-right-chiasm"],
        signal: "Input lost before chiasm",
        laterality: "Monocular",
        findingTitle: "Right monocular vision loss",
        summary:
          "A right optic nerve lesion removes all visual input from the right eye before any fibers reach the chiasm.",
        motor: "No motor deficit from the visual pathway",
        sensory: "Right eye vision loss across both visual fields",
        reflexes: "Right afferent pupillary defect if severe",
        clinicalLaterality: "Ipsilateral eye",
        clue: "Complete loss from one eye localizes anterior to the optic chiasm.",
        reasoning: [
          "The optic nerve carries all retinal information from one eye.",
          "The lesion is before the optic chiasm, so visual field organization has not yet separated into homonymous pathways.",
          "Both nasal and temporal retinal fibers from the right eye are interrupted.",
          "The pupillary light reflex can show an afferent defect because the sensory limb is damaged.",
        ],
      },
      {
        id: "optic-chiasm",
        code: "VIS-02",
        name: "Optic chiasm",
        short: "Crossing nasal retinal fibers",
        coord: { x: 500, y: 260 },
        affectedSegments: ["v-left-chiasm", "v-right-chiasm", "v-left-tract", "v-right-tract"],
        signal: "Crossing fibers interrupted",
        laterality: "Bitemporal",
        findingTitle: "Bitemporal hemianopia",
        summary:
          "The optic chiasm contains crossing nasal retinal fibers, which carry temporal visual field information from both eyes.",
        motor: "No motor deficit from the visual pathway",
        sensory: "Loss of temporal visual fields bilaterally",
        reflexes: "Pupillary reflexes may be preserved unless optic nerve input is broadly affected",
        clinicalLaterality: "Bilateral temporal fields",
        clue: "Bitemporal field loss is the classic localization clue for chiasmal compression.",
        reasoning: [
          "Nasal retinal fibers cross in the optic chiasm.",
          "Nasal retina views the temporal visual field.",
          "A midline chiasmal lesion preferentially disrupts temporal fields from both eyes.",
          "Because the lesion is at the crossing, the deficit is bilateral but field-specific rather than monocular.",
        ],
      },
      {
        id: "left-optic-tract",
        code: "VIS-03",
        name: "Left optic tract",
        short: "Post-chiasmal homonymous pathway",
        coord: { x: 348, y: 342 },
        affectedSegments: ["v-left-tract", "v-left-radiation", "v-left-occipital"],
        signal: "Interrupted after chiasm",
        laterality: "Contralateral visual field",
        findingTitle: "Right homonymous hemianopia",
        summary:
          "After the chiasm, each optic tract carries the contralateral visual field from both eyes.",
        motor: "No motor deficit from this pathway",
        sensory: "Right visual field loss in both eyes",
        reflexes: "Pupillary responses may be subtly asymmetric depending on tract involvement",
        clinicalLaterality: "Contralateral visual field",
        clue: "The same side of visual space missing from both eyes localizes behind the chiasm.",
        reasoning: [
          "The chiasm has already sorted visual information by visual field.",
          "The left optic tract carries right visual field information from both eyes.",
          "A left optic tract lesion therefore causes a right homonymous field deficit.",
          "Because both eyes are affected in the same visual field, the lesion is post-chiasmal.",
        ],
      },
      {
        id: "right-temporal-radiation",
        code: "VIS-04",
        name: "Right temporal radiation",
        short: "Meyer loop lesion",
        coord: { x: 704, y: 404 },
        affectedSegments: ["v-right-radiation", "v-right-occipital"],
        signal: "Inferior retinal fibers interrupted",
        laterality: "Contralateral superior quadrant",
        findingTitle: "Left superior quadrantanopia",
        summary:
          "Meyer loop in the right temporal lobe carries contralateral superior visual field information.",
        motor: "No motor deficit from the visual pathway",
        sensory: "Left superior visual quadrant loss in both eyes",
        reflexes: "Pupillary reflexes typically preserved",
        clinicalLaterality: "Contralateral upper quadrant",
        clue: "A superior quadrantanopia points toward temporal optic radiations.",
        reasoning: [
          "Post-chiasmal radiations preserve contralateral visual field organization.",
          "Temporal lobe Meyer loop carries superior visual field information.",
          "A right temporal radiation lesion therefore affects the left superior visual quadrant.",
          "The deficit is homonymous because the lesion is behind the chiasm.",
        ],
      },
      {
        id: "left-occipital-cortex",
        code: "VIS-05",
        name: "Left occipital cortex",
        short: "Primary visual cortex lesion",
        coord: { x: 400, y: 542 },
        affectedSegments: ["v-left-occipital"],
        signal: "Cortical endpoint interrupted",
        laterality: "Contralateral visual field",
        findingTitle: "Right homonymous hemianopia with possible macular sparing",
        summary:
          "The left occipital cortex represents the right visual field; posterior cerebral artery lesions may spare macular vision through collateral supply.",
        motor: "No motor deficit from this pathway",
        sensory: "Right homonymous hemianopia, sometimes with macular sparing",
        reflexes: "Pupillary reflexes preserved because the afferent reflex pathway branches before visual cortex",
        clinicalLaterality: "Contralateral visual field",
        clue: "Homonymous field loss with intact pupils suggests a cortical or optic radiation lesion.",
        reasoning: [
          "Visual cortex is post-chiasmal, so deficits are organized by visual field rather than by eye.",
          "The left occipital cortex maps the right visual field.",
          "Pupillary reflexes remain intact because they do not require primary visual cortex.",
          "Macular sparing can occur because occipital pole blood supply may be partially preserved.",
        ],
      },
    ],
  },
  {
    id: "corticobulbar",
    name: "Corticobulbar Tract",
    type: "Motor",
    color: "#f0b24d",
    description: "Face and tongue motor control, UMN vs LMN logic",
    origin: "Inferior motor cortex",
    decussation: "Bilateral projections to most cranial motor nuclei",
    rule: "UMN facial lesions spare forehead; nuclear or nerve lesions cause ipsilateral LMN weakness",
    decussationPoint: { x: 500, y: 356 },
    labels: {
      origin: { text: "Face motor cortex", x: 626, y: 128, lx: 584, ly: 130 },
      decussation: { text: "Brainstem motor nuclei", x: 536, y: 362, lx: 500, ly: 356 },
    },
    normal: {
      summary:
        "Corticobulbar fibers descend from face motor cortex to cranial motor nuclei, with bilateral input protecting many midline and upper-face movements.",
      motor: "Symmetric facial expression, articulation, swallowing, and tongue activation",
      sensory: "No primary sensory deficit",
      reflexes: "Jaw jerk and blink-related motor output remain physiologic",
      laterality: "No lateralized deficit",
      clue: "The intact map shows why upper motor neuron face lesions differ from facial nucleus or nerve lesions.",
      reasoning: [
        "Corticobulbar fibers descend through the genu of the internal capsule into the brainstem.",
        "Most cranial motor nuclei receive bilateral cortical input.",
        "The lower facial nucleus is the key exception, with stronger contralateral cortical control.",
        "With no lesion, brainstem nuclei and peripheral cranial nerves receive balanced descending drive.",
      ],
    },
    segments: [
      { id: "cb-1", d: "M584 130 C578 178 570 218 560 252" },
      { id: "cb-2", d: "M560 252 C548 298 528 330 500 356" },
      { id: "cb-3", d: "M500 356 C478 374 462 392 448 418" },
      { id: "cb-4", d: "M500 356 C522 382 536 412 548 448" },
      { id: "cb-5", d: "M448 418 C402 418 365 390 332 352" },
    ],
    lesions: [
      {
        id: "right-genu-internal-capsule",
        code: "CB-01",
        name: "Right genu internal capsule",
        short: "Supranuclear corticobulbar lesion",
        coord: { x: 560, y: 252 },
        affectedSegments: ["cb-2", "cb-3", "cb-4", "cb-5"],
        signal: "Interrupted above cranial motor nuclei",
        laterality: "Contralateral lower face",
        findingTitle: "Left lower facial weakness with forehead sparing",
        summary:
          "A right supranuclear corticobulbar lesion preferentially weakens the contralateral lower face while sparing the forehead through bilateral upper-face input.",
        motor: "Left lower facial weakness; forehead movement relatively preserved",
        sensory: "No primary facial sensory loss from corticobulbar injury alone",
        reflexes: "Jaw jerk may be brisk if bilateral corticobulbar disease is present",
        clinicalLaterality: "Contralateral lower face",
        clue: "Forehead sparing points away from the facial nerve and toward an upper motor neuron lesion.",
        reasoning: [
          "The lesion is above the facial nucleus, so it interrupts descending cortical control rather than the facial nerve itself.",
          "Upper facial muscles receive bilateral cortical input and are relatively protected.",
          "The lower facial nucleus depends more on contralateral cortical drive.",
          "Right corticobulbar interruption therefore causes left lower facial weakness.",
        ],
      },
      {
        id: "left-facial-nucleus",
        code: "CB-02",
        name: "Left facial nucleus",
        short: "Brainstem LMN facial lesion",
        coord: { x: 448, y: 418 },
        affectedSegments: ["cb-5"],
        signal: "Lower motor output interrupted",
        laterality: "Ipsilateral full face",
        findingTitle: "Left complete facial weakness",
        summary:
          "A lesion at the left facial nucleus or fascicle damages lower motor output, causing ipsilateral weakness of both upper and lower face.",
        motor: "Left forehead, eye closure, and lower facial weakness",
        sensory: "Facial sensation is preserved unless trigeminal pathways are also involved",
        reflexes: "Left efferent blink response reduced",
        clinicalLaterality: "Ipsilateral full face",
        clue: "Forehead involvement localizes to facial nucleus, fascicle, or nerve rather than a pure UMN lesion.",
        reasoning: [
          "The facial nucleus is the final common motor output to ipsilateral facial muscles.",
          "A nuclear or fascicular lesion bypasses the bilateral cortical protection of the upper face.",
          "Both upper and lower facial muscles weaken on the same side as the lesion.",
          "Nearby pontine signs can refine whether the lesion is nuclear, fascicular, or peripheral nerve.",
        ],
      },
      {
        id: "right-hypoglossal-corticobulbar",
        code: "CB-03",
        name: "Right hypoglossal corticobulbar fibers",
        short: "Tongue UMN pathway lesion",
        coord: { x: 536, y: 412 },
        affectedSegments: ["cb-4"],
        signal: "Contralateral genioglossus drive reduced",
        laterality: "Contralateral tongue weakness",
        findingTitle: "Tongue deviates left on protrusion",
        summary:
          "Right corticobulbar injury weakens the left genioglossus, so the tongue deviates toward the weak left side when protruded.",
        motor: "Left tongue weakness without marked atrophy",
        sensory: "No primary sensory deficit",
        reflexes: "No lower motor neuron atrophy or fasciculations expected",
        clinicalLaterality: "Contralateral tongue weakness",
        clue: "Tongue deviation without atrophy suggests a supranuclear corticobulbar lesion.",
        reasoning: [
          "Genioglossus activation is predominantly driven by contralateral cortical input.",
          "Right corticobulbar interruption reduces left genioglossus strength.",
          "The stronger right genioglossus pushes the tongue toward the weak left side.",
          "Absence of atrophy helps distinguish UMN corticobulbar injury from hypoglossal nucleus or nerve damage.",
        ],
      },
    ],
  },
  {
    id: "trigeminal-sensory",
    name: "Trigeminal Sensory Pathway",
    type: "Sensory",
    color: "#58a9ff",
    description: "Facial touch, pain, temperature, VPM relay",
    origin: "Facial receptors via trigeminal ganglion",
    decussation: "Brainstem trigeminothalamic crossing",
    rule: "Nucleus/ganglion lesions affect ipsilateral face; VPM/cortex lesions affect contralateral face",
    decussationPoint: { x: 500, y: 334 },
    labels: {
      origin: { text: "Face sensory input", x: 720, y: 248, lx: 792, ly: 238 },
      decussation: { text: "Trigeminothalamic crossing", x: 530, y: 342, lx: 500, ly: 334 },
    },
    normal: {
      summary:
        "Facial sensory input enters the trigeminal system, synapses in brainstem nuclei, crosses, and ascends to the contralateral VPM thalamus.",
      motor: "No primary motor deficit",
      sensory: "Normal facial light touch, pain, and temperature",
      reflexes: "Corneal reflex afferent limb intact",
      laterality: "No lateralized facial sensory deficit",
      clue: "The intact pathway distinguishes ipsilateral brainstem facial sensory loss from contralateral thalamic or cortical facial sensory loss.",
      reasoning: [
        "Facial sensory fibers enter through the trigeminal ganglion and root.",
        "They synapse in principal sensory or spinal trigeminal nuclei depending on modality.",
        "Second-order fibers cross in the brainstem.",
        "After crossing, trigeminothalamic fibers ascend to the opposite VPM thalamus.",
      ],
    },
    segments: [
      { id: "tri-1", d: "M792 238 C724 250 662 272 606 302" },
      { id: "tri-2", d: "M606 302 C566 322 532 332 500 334" },
      { id: "tri-3", d: "M500 334 C468 320 442 292 422 256" },
      { id: "tri-4", d: "M422 256 C404 216 384 178 356 140" },
    ],
    lesions: [
      {
        id: "right-trigeminal-ganglion",
        code: "TRI-01",
        name: "Right trigeminal ganglion",
        short: "Peripheral facial sensory lesion",
        coord: { x: 690, y: 262 },
        affectedSegments: ["tri-1", "tri-2", "tri-3", "tri-4"],
        signal: "Input lost before brainstem",
        laterality: "Ipsilateral face",
        findingTitle: "Right facial sensory loss",
        summary:
          "A right trigeminal ganglion lesion removes facial sensory input before it reaches brainstem nuclei, producing ipsilateral facial sensory loss.",
        motor: "Mastication weakness only if motor root is also involved",
        sensory: "Right facial light touch, pain, and temperature loss",
        reflexes: "Right corneal afferent limb reduced",
        clinicalLaterality: "Ipsilateral face",
        clue: "Whole-face sensory loss with corneal afferent impairment points to trigeminal root or ganglion.",
        reasoning: [
          "The ganglion is before the sensory fibers enter and cross in the brainstem.",
          "Input from the right face is lost at its entry point.",
          "The deficit remains ipsilateral because crossing has not occurred.",
          "Corneal reflex can be reduced because the trigeminal afferent limb is affected.",
        ],
      },
      {
        id: "right-spinal-trigeminal-nucleus",
        code: "TRI-02",
        name: "Right spinal trigeminal nucleus",
        short: "Brainstem facial pain-temperature lesion",
        coord: { x: 606, y: 302 },
        affectedSegments: ["tri-2", "tri-3", "tri-4"],
        signal: "Brainstem sensory nucleus interrupted",
        laterality: "Ipsilateral face",
        findingTitle: "Right facial pain and temperature loss",
        summary:
          "The spinal trigeminal nucleus carries ipsilateral facial pain and temperature before crossing into the trigeminothalamic tract.",
        motor: "No corticobulbar deficit from this pathway alone",
        sensory: "Right facial pain and temperature loss; touch may be partly spared",
        reflexes: "Right corneal afferent limb may be impaired",
        clinicalLaterality: "Ipsilateral face",
        clue: "Ipsilateral facial pain-temperature loss with contralateral body pain loss suggests lateral brainstem localization.",
        reasoning: [
          "Facial pain and temperature fibers descend to the spinal trigeminal nucleus before crossing.",
          "A right nuclear lesion affects right facial sensory information.",
          "Body pain and temperature pathways nearby have already crossed, creating crossed face-body patterns.",
          "This laterality split is a major brainstem localization clue.",
        ],
      },
      {
        id: "left-vpm",
        code: "TRI-03",
        name: "Left VPM thalamus",
        short: "Post-crossing facial sensory relay",
        coord: { x: 422, y: 256 },
        affectedSegments: ["tri-3", "tri-4"],
        signal: "Relay output interrupted",
        laterality: "Contralateral face",
        findingTitle: "Right facial sensory loss",
        summary:
          "After brainstem crossing, the left VPM thalamus relays right facial sensory information to cortex.",
        motor: "No primary motor deficit from this pathway",
        sensory: "Right facial sensory loss, often across multiple modalities",
        reflexes: "Corneal reflex may be preserved if brainstem afferent arc remains intact",
        clinicalLaterality: "Contralateral face",
        clue: "Contralateral face sensory loss without a peripheral pattern suggests VPM or sensory cortex.",
        reasoning: [
          "Trigeminal sensory fibers cross before reaching the thalamus.",
          "The left VPM represents the right face.",
          "A thalamic lesion interrupts relay to sensory cortex.",
          "Brainstem reflex arcs can remain intact because the lesion is above the reflex circuitry.",
        ],
      },
    ],
  },
  {
    id: "pupillary-light",
    name: "Pupillary Light Reflex",
    type: "Visual",
    color: "#b48cff",
    description: "Afferent optic nerve, bilateral midbrain, CN III efferent",
    origin: "Retina and optic nerve",
    decussation: "Bilateral pretectal projections to Edinger-Westphal nuclei",
    rule: "Afferent lesions affect responses when that eye is stimulated; efferent lesions affect constriction of that pupil",
    decussationPoint: { x: 500, y: 238 },
    labels: {
      origin: { text: "Light input", x: 174, y: 210, lx: 190, ly: 238 },
      decussation: { text: "Bilateral midbrain relay", x: 532, y: 228, lx: 500, ly: 238 },
    },
    normal: {
      summary:
        "Light input travels through the optic nerve to bilateral pretectal and Edinger-Westphal circuits, driving both pupils to constrict.",
      motor: "No extraocular motor deficit",
      sensory: "Afferent light input intact from both eyes",
      reflexes: "Direct and consensual pupillary constriction present bilaterally",
      laterality: "Symmetric direct and consensual responses",
      clue: "The intact reflex map separates afferent input failure from efferent pupil-constriction failure.",
      reasoning: [
        "Retinal light input travels through the optic nerve as the afferent limb.",
        "Midbrain pretectal neurons project bilaterally to Edinger-Westphal nuclei.",
        "Each Edinger-Westphal nucleus sends parasympathetic output through ipsilateral CN III.",
        "Bilateral midbrain projection explains why one eye's light normally constricts both pupils.",
      ],
    },
    segments: [
      { id: "plr-left-afferent", d: "M190 238 C270 232 370 232 500 238" },
      { id: "plr-right-afferent", d: "M810 238 C730 232 630 232 500 238" },
      { id: "plr-left-ew", d: "M500 238 C454 248 410 268 370 302" },
      { id: "plr-right-ew", d: "M500 238 C546 248 590 268 630 302" },
      { id: "plr-left-efferent", d: "M370 302 C318 286 255 262 190 238" },
      { id: "plr-right-efferent", d: "M630 302 C682 286 745 262 810 238" },
    ],
    lesions: [
      {
        id: "right-optic-nerve-plr",
        code: "PLR-01",
        name: "Right optic nerve",
        short: "Afferent pupillary defect",
        coord: { x: 720, y: 232 },
        affectedSegments: ["plr-right-afferent"],
        signal: "Afferent input reduced",
        laterality: "Right afferent",
        findingTitle: "Right relative afferent pupillary defect",
        summary:
          "A right optic nerve lesion reduces the afferent signal when light is shone in the right eye, so both pupils constrict less from right-eye stimulation.",
        motor: "Pupils can still constrict through intact CN III efferents",
        sensory: "Right optic afferent light input reduced",
        reflexes: "Poor direct and consensual response when right eye is stimulated; better responses when left eye is stimulated",
        clinicalLaterality: "Right afferent defect",
        clue: "Both pupils respond better to the left eye than the right eye, localizing the problem to right afferent input.",
        reasoning: [
          "The optic nerve is the sensory limb of the light reflex.",
          "Right-eye stimulation produces a weak signal before the bilateral midbrain relay.",
          "Because the problem is afferent, both pupils receive less drive from right-eye light.",
          "Left-eye stimulation can still activate both Edinger-Westphal nuclei normally.",
        ],
      },
      {
        id: "right-cn-iii-parasympathetic",
        code: "PLR-02",
        name: "Right CN III parasympathetic fibers",
        short: "Efferent pupil constriction lesion",
        coord: { x: 706, y: 268 },
        affectedSegments: ["plr-right-efferent"],
        signal: "Right efferent output interrupted",
        laterality: "Right pupil",
        findingTitle: "Right fixed dilated pupil",
        summary:
          "A right oculomotor parasympathetic lesion prevents the right pupil from constricting, regardless of which eye receives light.",
        motor: "Possible right ptosis and extraocular movement deficits if somatic CN III fibers are involved",
        sensory: "Afferent light input may be intact",
        reflexes: "Right direct and right consensual constriction impaired; left pupil still constricts",
        clinicalLaterality: "Ipsilateral efferent defect",
        clue: "Failure of one pupil to constrict to either eye's light localizes to that pupil's efferent limb.",
        reasoning: [
          "The midbrain relay can still receive light input from either eye.",
          "The right parasympathetic CN III output cannot reach the right sphincter pupillae.",
          "The right pupil therefore fails to constrict during both direct and consensual testing.",
          "The left efferent limb remains intact, so the left pupil can still constrict.",
        ],
      },
      {
        id: "dorsal-midbrain",
        code: "PLR-03",
        name: "Dorsal midbrain pretectal region",
        short: "Bilateral light reflex relay lesion",
        coord: { x: 500, y: 238 },
        affectedSegments: ["plr-left-ew", "plr-right-ew", "plr-left-efferent", "plr-right-efferent"],
        signal: "Bilateral relay impaired",
        laterality: "Bilateral reflex pathway",
        findingTitle: "Light-near dissociation pattern risk",
        summary:
          "A dorsal midbrain lesion can disrupt pretectal light-reflex relays while sparing some near-response circuitry.",
        motor: "May include vertical gaze impairment depending on adjacent midbrain involvement",
        sensory: "Visual perception may be relatively preserved if optic radiations and cortex are intact",
        reflexes: "Pupillary light responses impaired bilaterally; near response may be relatively spared",
        clinicalLaterality: "Bilateral midbrain reflex deficit",
        clue: "Bilateral poor light response with preserved near response points toward dorsal midbrain localization.",
        reasoning: [
          "The pretectal region is the bilateral relay between optic afferents and Edinger-Westphal nuclei.",
          "A midline dorsal lesion can reduce light-reflex drive to both pupils.",
          "Visual awareness can remain intact because the geniculostriate pathway is separate.",
          "Near-response pathways can be relatively spared, creating light-near dissociation.",
        ],
      },
    ],
  },
  {
    id: "cerebellar-loop",
    name: "Cerebellar Coordination Loop",
    type: "Coordination",
    color: "#91e6bc",
    description: "Motor calibration, peduncles, ipsilateral ataxia",
    origin: "Cortical and proprioceptive feedback",
    decussation: "Functional double-crossing through cerebellar circuits",
    rule: "Cerebellar hemisphere and peduncle lesions usually cause ipsilateral ataxia",
    decussationPoint: { x: 538, y: 426 },
    labels: {
      origin: { text: "Motor plan feedback", x: 624, y: 142, lx: 592, ly: 142 },
      decussation: { text: "Double-crossed coordination loop", x: 558, y: 424, lx: 538, ly: 426 },
    },
    normal: {
      summary:
        "Cerebellar circuits compare motor plans with sensory feedback, adjust timing and force, and return calibrated output to motor systems.",
      motor: "Smooth, coordinated movement without weakness",
      sensory: "Proprioceptive feedback available for calibration",
      reflexes: "Reflex strength preserved; timing and check responses coordinated",
      laterality: "No lateralized ataxia",
      clue: "The intact view anchors a key localization rule: cerebellar signs are usually ipsilateral to the lesion.",
      reasoning: [
        "The cerebellum calibrates movement rather than directly generating primary strength.",
        "Inputs and outputs cross in a way that functionally links each cerebellar hemisphere with the ipsilateral body.",
        "Normal output keeps timing, trajectory, and error correction precise.",
        "Because corticospinal strength can remain intact, cerebellar lesions cause ataxia more than true weakness.",
      ],
    },
    segments: [
      { id: "cer-1", d: "M592 142 C578 210 552 292 506 356" },
      { id: "cer-2", d: "M506 356 C520 388 536 414 566 434" },
      { id: "cer-3", d: "M566 434 C588 452 612 462 640 456" },
      { id: "cer-4", d: "M640 456 C624 492 588 508 552 486" },
      { id: "cer-5", d: "M552 486 C540 464 534 444 538 426" },
    ],
    lesions: [
      {
        id: "left-cerebellar-hemisphere",
        code: "CER-01",
        name: "Left cerebellar hemisphere",
        short: "Ipsilateral limb coordination lesion",
        coord: { x: 640, y: 456 },
        affectedSegments: ["cer-4", "cer-5"],
        signal: "Calibration output degraded",
        laterality: "Ipsilateral",
        findingTitle: "Left limb ataxia without primary weakness",
        summary:
          "A left cerebellar hemisphere lesion disrupts calibration for the left body, producing ipsilateral ataxia rather than a pyramidal weakness pattern.",
        motor: "Left dysmetria, intention tremor, decomposition of movement",
        sensory: "Primary sensation usually intact unless input pathways are involved",
        reflexes: "Pendular reflex quality may appear, but reflexes are not classically hyperreflexic",
        clinicalLaterality: "Ipsilateral limb ataxia",
        clue: "Ataxia with preserved strength and ipsilateral signs points toward cerebellar hemisphere.",
        reasoning: [
          "Cerebellar hemispheres coordinate movements on the same side of the body.",
          "The lesion impairs timing and error correction rather than corticospinal drive.",
          "Strength may test near normal, but trajectory and endpoint control are poor.",
          "Ipsilateral limb findings help distinguish cerebellar lesions from many supratentorial motor lesions.",
        ],
      },
      {
        id: "left-superior-cerebellar-peduncle",
        code: "CER-02",
        name: "Left superior cerebellar peduncle",
        short: "Cerebellar output pathway lesion",
        coord: { x: 538, y: 426 },
        affectedSegments: ["cer-5"],
        signal: "Output from cerebellum interrupted",
        laterality: "Ipsilateral ataxia",
        findingTitle: "Left ataxia with impaired corrective output",
        summary:
          "The superior cerebellar peduncle carries major cerebellar output; interruption produces ipsilateral coordination deficits.",
        motor: "Left dysmetria, rebound, intention tremor",
        sensory: "Primary sensory modalities may remain intact",
        reflexes: "No Babinski sign from this pathway alone",
        clinicalLaterality: "Ipsilateral cerebellar signs",
        clue: "Prominent ataxia without sensory loss or UMN signs suggests a cerebellar output pathway.",
        reasoning: [
          "Cerebellar computation must leave through peduncular output pathways to influence movement.",
          "A left output lesion disconnects calibrated correction from left-sided motor execution.",
          "The clinical result is impaired coordination, not loss of primary power.",
          "Absence of corticospinal signs helps separate this from pyramidal tract disease.",
        ],
      },
      {
        id: "vermis",
        code: "CER-03",
        name: "Cerebellar vermis",
        short: "Midline gait and truncal control lesion",
        coord: { x: 588, y: 444 },
        affectedSegments: ["cer-3", "cer-4", "cer-5"],
        signal: "Midline coordination degraded",
        laterality: "Axial/midline",
        findingTitle: "Truncal ataxia and wide-based gait",
        summary:
          "A vermian lesion preferentially affects axial and gait coordination because the midline cerebellum calibrates posture and stance.",
        motor: "Wide-based gait, truncal sway, impaired stance",
        sensory: "Primary sensory loss is not required",
        reflexes: "Reflex strength usually preserved",
        clinicalLaterality: "Midline or bilateral axial signs",
        clue: "Gait and truncal instability out of proportion to limb weakness localizes to cerebellar vermis.",
        reasoning: [
          "The vermis is specialized for axial posture and gait coordination.",
          "A midline lesion affects balance and stance more than isolated distal limb targeting.",
          "Primary strength can remain intact because corticospinal output is not the main injured pathway.",
          "The deficit is midline rather than a clean left-right pyramidal pattern.",
        ],
      },
    ],
  },
  {
    id: "auditory",
    name: "Auditory Pathway",
    type: "Sensory",
    complexity: "Intermediate",
    color: "#7cc7ff",
    description: "Cochlear nerve, bilateral brainstem relays, auditory cortex",
    origin: "Cochlea and CN VIII",
    decussation: "Bilateral projections after cochlear nuclei",
    rule: "Peripheral lesions cause ipsilateral hearing loss; central unilateral lesions rarely cause complete deafness",
    pattern: "Bilateral redundancy after the cochlear nuclei",
    network: "Auditory brainstem-thalamocortical relay",
    pitfall: "Do not expect a unilateral cortical lesion to cause complete unilateral deafness.",
    decussationPoint: { x: 500, y: 338 },
    labels: {
      origin: { text: "Cochlear input", x: 822, y: 318, lx: 760, ly: 312 },
      decussation: { text: "Bilateral auditory relay", x: 532, y: 346, lx: 500, ly: 338 },
    },
    normal: {
      summary:
        "Sound enters through the cochlear nerve, synapses in cochlear nuclei, then projects bilaterally through brainstem relays toward auditory cortex.",
      motor: "No primary motor deficit",
      sensory: "Normal hearing and sound localization",
      reflexes: "Acoustic reflex pathways available if facial motor output is intact",
      laterality: "Bilateral central representation",
      pattern: "Peripheral monoaural input becomes bilaterally represented centrally",
      network: "Cochlear nuclei, superior olive, lateral lemniscus, inferior colliculus, medial geniculate, auditory cortex",
      pitfall: "Central auditory lesions often impair localization or processing more than raw hearing threshold.",
      clue: "The intact map shows why lesion level matters more than simple left-right crossing.",
      reasoning: [
        "CN VIII carries input from one cochlea into ipsilateral cochlear nuclei.",
        "From the cochlear nuclei, auditory information projects to both sides of the brainstem.",
        "Bilateral representation protects basic hearing from many unilateral central lesions.",
        "Higher lesions can still impair localization, speech perception, or cortical auditory processing.",
      ],
    },
    segments: [
      { id: "aud-1", d: "M760 312 C708 316 650 326 590 338" },
      { id: "aud-2", d: "M590 338 C552 344 522 344 500 338" },
      { id: "aud-3", d: "M500 338 C462 320 430 292 406 256" },
      { id: "aud-4", d: "M500 338 C548 310 590 274 626 226" },
      { id: "aud-5", d: "M406 256 C378 214 346 176 304 138" },
      { id: "aud-6", d: "M626 226 C662 184 704 154 752 138" },
    ],
    lesions: [
      {
        id: "right-cochlear-nerve",
        code: "AUD-01",
        name: "Right cochlear nerve",
        short: "Peripheral auditory input lesion",
        coord: { x: 760, y: 312 },
        affectedSegments: ["aud-1", "aud-2", "aud-3", "aud-4", "aud-5", "aud-6"],
        signal: "Input lost before bilateral relay",
        laterality: "Ipsilateral hearing",
        findingTitle: "Right sensorineural hearing loss",
        summary:
          "A right cochlear nerve lesion removes auditory input before it reaches the bilateral brainstem relay system.",
        motor: "No primary motor deficit",
        sensory: "Right sensorineural hearing loss",
        reflexes: "Right acoustic reflex afferent limb reduced",
        clinicalLaterality: "Ipsilateral ear",
        pattern: "Pre-brainstem monoaural input loss",
        network: "CN VIII afferent limb before cochlear nuclei",
        pitfall: "A peripheral CN VIII lesion behaves very differently from a unilateral cortical lesion.",
        clue: "True unilateral hearing loss localizes to the ear, cochlea, cochlear nerve, or cochlear nucleus.",
        reasoning: [
          "The lesion occurs before auditory information is distributed bilaterally.",
          "The right cochlea cannot deliver signal into the central auditory system.",
          "Because the input is lost at the source, the deficit is ipsilateral hearing loss.",
          "Downstream bilateral pathways cannot reconstruct sound that never entered.",
        ],
      },
      {
        id: "left-lateral-lemniscus",
        code: "AUD-02",
        name: "Left lateral lemniscus",
        short: "Central auditory brainstem lesion",
        coord: { x: 430, y: 292 },
        affectedSegments: ["aud-3", "aud-5"],
        signal: "Central relay degraded",
        laterality: "Bilateral processing, right-biased",
        findingTitle: "Impaired sound localization without complete deafness",
        summary:
          "A unilateral lateral lemniscus lesion disrupts central auditory timing and localization but usually does not cause complete hearing loss because auditory input is bilateral centrally.",
        motor: "No primary motor deficit",
        sensory: "Difficulty localizing sound, especially with right-sided inputs",
        reflexes: "Acoustic reflex findings depend on exact relay involvement",
        clinicalLaterality: "Central auditory processing deficit",
        pattern: "Post-cochlear bilateral redundancy",
        network: "Brainstem auditory relay",
        pitfall: "Unilateral central auditory tract lesions are not equivalent to unilateral deafness.",
        clue: "Preserved basic hearing with localization difficulty points central rather than peripheral.",
        reasoning: [
          "Auditory fibers have already entered bilateral brainstem pathways.",
          "One lateral lemniscus carries mixed information from both ears, with contralateral emphasis.",
          "The opposite pathway can preserve basic hearing thresholds.",
          "Localization and temporal processing suffer because binaural comparison is degraded.",
        ],
      },
      {
        id: "right-auditory-cortex",
        code: "AUD-03",
        name: "Right auditory cortex",
        short: "Cortical auditory processing lesion",
        coord: { x: 752, y: 138 },
        affectedSegments: ["aud-6"],
        signal: "Cortical processing interrupted",
        laterality: "Bilateral, left-biased",
        findingTitle: "Left-biased auditory processing deficit",
        summary:
          "A right auditory cortical lesion affects complex sound processing more than basic hearing because each auditory cortex receives bilateral input.",
        motor: "No primary motor deficit",
        sensory: "Difficulty with complex sound localization or auditory scene processing",
        reflexes: "Brainstem auditory reflexes preserved",
        clinicalLaterality: "Contralateral-biased processing deficit",
        pattern: "Cortical bilateral representation",
        network: "Medial geniculate to auditory cortex",
        pitfall: "Normal bedside hearing does not exclude cortical auditory dysfunction.",
        clue: "Preserved brainstem reflexes with higher auditory processing trouble points above the brainstem.",
        reasoning: [
          "Auditory cortex receives information from both ears through bilateral relays.",
          "A unilateral cortical lesion does not usually abolish hearing from one ear.",
          "The deficit is biased toward processing sounds from contralateral space.",
          "Brainstem reflexes remain intact because the lesion is cortical.",
        ],
      },
    ],
  },
  {
    id: "vestibulo-ocular",
    name: "Vestibulo-Ocular / MLF Pathway",
    type: "Coordination",
    complexity: "Advanced",
    color: "#59d9e8",
    description: "Vestibular input, gaze holding, MLF, conjugate eye movement",
    origin: "Semicircular canals and vestibular nerve",
    decussation: "Bilateral vestibular nuclei and MLF coordination",
    rule: "Peripheral vestibular lesions create vertigo/nystagmus; MLF lesions create internuclear ophthalmoplegia",
    pattern: "Cross-linked ocular motor coordination network",
    network: "Vestibular nuclei, abducens nucleus, MLF, oculomotor nucleus",
    pitfall: "Eye movement localization often depends on which eye cannot move, not just which way gaze fails.",
    decussationPoint: { x: 500, y: 346 },
    labels: {
      origin: { text: "Vestibular input", x: 800, y: 300, lx: 746, ly: 306 },
      decussation: { text: "MLF gaze bridge", x: 530, y: 354, lx: 500, ly: 346 },
    },
    normal: {
      summary:
        "Vestibular input stabilizes gaze by linking vestibular nuclei to abducens and oculomotor nuclei through the medial longitudinal fasciculus.",
      motor: "Conjugate gaze and vestibulo-ocular reflex intact",
      sensory: "Normal vestibular input and balance signal",
      reflexes: "Vestibulo-ocular reflex preserves fixation during head movement",
      laterality: "Balanced bilateral vestibular tone",
      pattern: "Bilateral brainstem coordination rather than a single ascending tract",
      network: "Labyrinth, vestibular nuclei, CN VI nucleus, MLF, CN III nucleus",
      pitfall: "An MLF lesion is not a CN III palsy; convergence and pupil function help separate them.",
      clue: "The intact map shows why one eye's adduction failure can come from a tract lesion rather than an ocular motor nerve lesion.",
      reasoning: [
        "Vestibular nuclei compare head-motion signals from both labyrinths.",
        "The abducens nucleus drives ipsilateral lateral rectus and sends internuclear fibers through the opposite MLF.",
        "The MLF activates the contralateral oculomotor nucleus for medial rectus adduction.",
        "This linked circuit keeps both eyes moving together during gaze and head movement.",
      ],
    },
    segments: [
      { id: "vor-1", d: "M746 306 C686 320 632 334 578 346" },
      { id: "vor-2", d: "M578 346 C542 354 518 354 500 346" },
      { id: "vor-3", d: "M500 346 C458 334 414 314 370 286" },
      { id: "vor-4", d: "M370 286 C318 262 252 244 190 238" },
      { id: "vor-5", d: "M500 346 C548 326 600 300 648 268" },
      { id: "vor-6", d: "M648 268 C704 248 760 240 810 238" },
    ],
    lesions: [
      {
        id: "right-vestibular-nerve",
        code: "VOR-01",
        name: "Right vestibular nerve",
        short: "Peripheral vestibular tone lesion",
        coord: { x: 746, y: 306 },
        affectedSegments: ["vor-1", "vor-2", "vor-3", "vor-4", "vor-5", "vor-6"],
        signal: "Right vestibular input reduced",
        laterality: "Ipsilateral vestibular",
        findingTitle: "Acute right vestibular hypofunction",
        summary:
          "Right vestibular nerve loss creates an imbalance in tonic vestibular input, producing vertigo, nausea, and direction-fixed nystagmus.",
        motor: "Gait veers right; no primary limb weakness",
        sensory: "Vertigo and oscillopsia rather than cutaneous sensory loss",
        reflexes: "Reduced right vestibulo-ocular reflex on head impulse testing",
        clinicalLaterality: "Ipsilateral peripheral vestibular deficit",
        pattern: "Peripheral imbalance of bilateral vestibular tone",
        network: "Labyrinth/CN VIII afferent limb",
        pitfall: "Peripheral vertigo can look dramatic but should not produce long-tract UMN signs.",
        clue: "Abnormal head impulse with direction-fixed nystagmus points peripheral.",
        reasoning: [
          "The vestibular nuclei normally compare tonic input from both sides.",
          "Right vestibular nerve loss makes the brainstem interpret a false leftward motion signal.",
          "The vestibulo-ocular reflex from the right labyrinth is reduced.",
          "Absence of corticospinal or sensory tract signs supports peripheral localization.",
        ],
      },
      {
        id: "left-mlf",
        code: "VOR-02",
        name: "Left medial longitudinal fasciculus",
        short: "Internuclear ophthalmoplegia lesion",
        coord: { x: 430, y: 314 },
        affectedSegments: ["vor-3", "vor-4"],
        signal: "Adduction bridge interrupted",
        laterality: "Left internuclear",
        findingTitle: "Left internuclear ophthalmoplegia",
        summary:
          "A left MLF lesion prevents the left medial rectus subnucleus from receiving conjugate gaze signals, causing impaired left eye adduction on right gaze.",
        motor: "Left eye adduction weakness on right gaze with abducting nystagmus of the right eye",
        sensory: "No primary sensory loss from isolated MLF lesion",
        reflexes: "Vestibulo-ocular coordination impaired; pupils usually spared",
        clinicalLaterality: "Ipsilateral adduction deficit",
        pattern: "Internuclear disconnection",
        network: "MLF between abducens and oculomotor nuclei",
        pitfall: "Pupil-sparing adduction failure with preserved convergence is not a complete CN III palsy.",
        clue: "Adduction failure plus contralateral abducting nystagmus is the signature of INO.",
        reasoning: [
          "Right gaze requires the right abducens nucleus to communicate with the left oculomotor nucleus.",
          "That internuclear signal travels through the left MLF.",
          "A left MLF lesion disconnects the left medial rectus during conjugate gaze.",
          "The right abducting eye overshoots with nystagmus because yoked gaze calibration is disrupted.",
        ],
      },
      {
        id: "right-abducens-nucleus",
        code: "VOR-03",
        name: "Right abducens nucleus",
        short: "Horizontal gaze center lesion",
        coord: { x: 648, y: 268 },
        affectedSegments: ["vor-5", "vor-6"],
        signal: "Right gaze command interrupted",
        laterality: "Ipsilateral gaze palsy",
        findingTitle: "Right horizontal gaze palsy",
        summary:
          "A right abducens nucleus lesion disrupts the right lateral rectus motor neurons and the internuclear drive to the left medial rectus, impairing gaze to the right.",
        motor: "Both eyes fail to look right; possible right facial weakness if adjacent facial fibers are involved",
        sensory: "No primary sensory loss unless adjacent pathways are affected",
        reflexes: "Horizontal VOR toward the right may be impaired",
        clinicalLaterality: "Ipsilateral conjugate gaze deficit",
        pattern: "Nuclear gaze center failure",
        network: "CN VI nucleus and internuclear projection",
        pitfall: "An abducens nucleus lesion causes conjugate gaze palsy; a CN VI nerve lesion affects only the ipsilateral lateral rectus.",
        clue: "Failure of both eyes to move toward one side localizes to gaze center or PPRF region.",
        reasoning: [
          "The abducens nucleus contains motor neurons for ipsilateral lateral rectus.",
          "It also sends internuclear fibers to the contralateral oculomotor nucleus.",
          "A nuclear lesion therefore disrupts both eyes' coordinated movement toward the lesion side.",
          "This differs from a peripheral CN VI palsy, which affects only one eye.",
        ],
      },
    ],
  },
  {
    id: "oculosympathetic",
    name: "Oculosympathetic Pathway",
    type: "Autonomic",
    complexity: "Advanced",
    color: "#ff9a61",
    description: "Horner syndrome, hypothalamospinal, T1, carotid plexus",
    origin: "Posterolateral hypothalamus",
    decussation: "No major crossing; three-neuron ipsilateral sympathetic chain",
    rule: "All lesions cause ipsilateral ptosis and miosis; anhidrosis pattern helps level localization",
    pattern: "Three-neuron autonomic chain",
    network: "Hypothalamus, brainstem, ciliospinal center, sympathetic chain, carotid plexus",
    pitfall: "Horner syndrome laterality is ipsilateral even when the lesion is central.",
    decussationPoint: { x: 500, y: 520 },
    labels: {
      origin: { text: "Hypothalamus", x: 622, y: 130, lx: 584, ly: 132 },
      decussation: { text: "Ciliospinal center T1", x: 540, y: 532, lx: 500, ly: 520 },
    },
    normal: {
      summary:
        "Sympathetic pupil and eyelid tone descends uncrossed from hypothalamus to T1, exits to the sympathetic chain, then ascends along the carotid plexus to the eye.",
      motor: "Normal upper eyelid tone via Muller's muscle",
      sensory: "No primary somatic sensory role",
      reflexes: "Pupils dilate appropriately in darkness",
      laterality: "Ipsilateral sympathetic output preserved",
      pattern: "Uncrossed three-neuron autonomic pathway",
      network: "Central, preganglionic, and postganglionic sympathetic neurons",
      pitfall: "A small ptosis with miosis is not a CN III palsy; pupil size direction matters.",
      clue: "The intact map shows why anhidrosis separates central/preganglionic from many postganglionic lesions.",
      reasoning: [
        "First-order neurons descend uncrossed through the lateral brainstem and cervical cord.",
        "Second-order neurons exit near T1 and ascend through the sympathetic chain.",
        "Third-order neurons travel with the carotid plexus toward the orbit.",
        "The pathway maintains ipsilateral pupillary dilation, eyelid tone, and sweating patterns.",
      ],
    },
    segments: [
      { id: "sym-1", d: "M584 132 C566 214 540 322 514 448" },
      { id: "sym-2", d: "M514 448 C508 480 504 504 500 520" },
      { id: "sym-3", d: "M500 520 C610 510 704 456 754 360" },
      { id: "sym-4", d: "M754 360 C780 318 796 276 810 238" },
    ],
    lesions: [
      {
        id: "right-lateral-medulla-sympathetic",
        code: "SYM-01",
        name: "Right lateral medulla",
        short: "Central Horner pathway lesion",
        coord: { x: 536, y: 338 },
        affectedSegments: ["sym-1", "sym-2", "sym-3", "sym-4"],
        signal: "Central sympathetic descent interrupted",
        laterality: "Ipsilateral Horner",
        findingTitle: "Right Horner syndrome with brainstem signs",
        summary:
          "A right lateral medullary lesion can interrupt descending sympathetic fibers before they reach T1, causing ipsilateral Horner syndrome with possible crossed sensory findings.",
        motor: "No primary corticospinal weakness from this pathway alone",
        sensory: "May combine with ipsilateral facial and contralateral body pain-temperature loss if adjacent pathways are involved",
        reflexes: "Right pupil dilates poorly in darkness",
        clinicalLaterality: "Ipsilateral ptosis and miosis",
        pattern: "First-order central sympathetic lesion",
        network: "Hypothalamospinal sympathetic descent",
        pitfall: "Central Horner remains ipsilateral; crossed sensory signs come from neighboring sensory tracts.",
        clue: "Horner syndrome plus crossed pain-temperature findings strongly suggests lateral medulla.",
        reasoning: [
          "Descending sympathetic fibers run uncrossed through the lateral brainstem.",
          "A right lateral medullary lesion interrupts right sympathetic tone.",
          "The right pupil becomes miotic and the right eyelid mildly ptotic.",
          "Adjacent trigeminal and spinothalamic involvement can create the classic crossed sensory pattern.",
        ],
      },
      {
        id: "right-pancoast",
        code: "SYM-02",
        name: "Right T1 sympathetic outflow",
        short: "Preganglionic Horner lesion",
        coord: { x: 500, y: 520 },
        affectedSegments: ["sym-3", "sym-4"],
        signal: "Preganglionic output interrupted",
        laterality: "Ipsilateral Horner",
        findingTitle: "Right Horner syndrome with arm/shoulder clue",
        summary:
          "A lesion at the T1 sympathetic outflow interrupts preganglionic fibers to the superior cervical ganglion, producing ipsilateral Horner syndrome.",
        motor: "Possible hand intrinsic weakness if lower brachial plexus is involved",
        sensory: "Possible C8/T1 arm pain or numbness from adjacent plexus involvement",
        reflexes: "Right pupil dilates poorly in darkness",
        clinicalLaterality: "Ipsilateral ptosis, miosis, facial anhidrosis possible",
        pattern: "Second-order preganglionic sympathetic lesion",
        network: "Ciliospinal center and sympathetic chain",
        pitfall: "Arm pain plus Horner should not be localized to the eye alone.",
        clue: "Horner syndrome with C8/T1 pain suggests apical lung, lower plexus, or thoracic outlet region.",
        reasoning: [
          "Second-order sympathetic neurons leave the spinal cord around T1.",
          "A preganglionic lesion prevents sympathetic signal from reaching the superior cervical ganglion.",
          "The right eye loses dilation and mild eyelid elevation tone.",
          "Nearby brachial plexus involvement can add arm pain or hand weakness.",
        ],
      },
      {
        id: "right-internal-carotid-plexus",
        code: "SYM-03",
        name: "Right internal carotid plexus",
        short: "Postganglionic Horner lesion",
        coord: { x: 754, y: 360 },
        affectedSegments: ["sym-4"],
        signal: "Postganglionic fibers interrupted",
        laterality: "Ipsilateral eye",
        findingTitle: "Right painful postganglionic Horner syndrome",
        summary:
          "A right carotid plexus lesion interrupts postganglionic sympathetic fibers to the eye, causing ipsilateral ptosis and miosis often without full facial anhidrosis.",
        motor: "No primary limb weakness from this pathway",
        sensory: "Pain may occur with carotid dissection; somatic sensory loss is not required",
        reflexes: "Right pupil dilates poorly in darkness",
        clinicalLaterality: "Ipsilateral ocular Horner pattern",
        pattern: "Third-order postganglionic sympathetic lesion",
        network: "Superior cervical ganglion to carotid plexus and orbit",
        pitfall: "Painful acute Horner syndrome is a vascular red flag.",
        clue: "Horner syndrome with head or neck pain can localize to internal carotid sympathetic fibers.",
        reasoning: [
          "Postganglionic sympathetic fibers ascend with the internal carotid artery.",
          "A lesion here affects ocular sympathetic output after sweating fibers have partly diverged.",
          "Ptosis and miosis occur on the same side as the lesion.",
          "Relative facial sweating preservation supports a postganglionic level.",
        ],
      },
    ],
  },
  {
    id: "basal-ganglia-loop",
    name: "Basal Ganglia Motor Loop",
    type: "Motor Modulation",
    complexity: "Advanced",
    color: "#91e6bc",
    description: "Direct/indirect loop, thalamic gating, movement disorders",
    origin: "Motor cortex and striatum",
    decussation: "No single decussation; basal ganglia modulate ipsilateral cortex controlling the opposite body",
    rule: "Basal ganglia lesions change movement selection more than primary strength",
    pattern: "Cortico-striato-pallido-thalamo-cortical loop",
    network: "Striatum, GPi/SNr, STN, substantia nigra, VA/VL thalamus",
    pitfall: "Bradykinesia, chorea, and ballismus are movement-control problems, not classic UMN weakness.",
    decussationPoint: { x: 508, y: 292 },
    labels: {
      origin: { text: "Motor cortex", x: 614, y: 152, lx: 558, ly: 172 },
      decussation: { text: "Basal ganglia gate", x: 414, y: 304, lx: 508, ly: 292 },
    },
    normal: {
      summary:
        "The basal ganglia loop gates intended movement, suppresses competing motor programs, and returns calibrated drive through thalamus to motor cortex.",
      motor: "Normal initiation, scaling, and suppression of unwanted movement",
      sensory: "No primary sensory deficit",
      reflexes: "Reflex arcs remain intact; tone and movement amplitude are modulated",
      laterality: "No lateralized movement disorder",
      pattern: "Loop-based motor selection rather than descending tract interruption",
      network: "Cortex, striatum, pallidum, STN, substantia nigra, thalamus",
      pitfall: "Normal strength does not exclude a basal ganglia movement disorder.",
      clue: "Use this intact view to separate pyramidal weakness from extrapyramidal movement selection.",
      reasoning: [
        "Motor cortex sends intent into the striatum.",
        "Direct and indirect pathways regulate pallidal inhibition of thalamus.",
        "Dopamine from substantia nigra biases the loop toward appropriate movement initiation.",
        "The output returns to cortex, so clinical signs are movement-pattern problems rather than sensory levels.",
      ],
    },
    segments: [
      { id: "bg-1", d: "M558 172 C572 198 570 224 548 238" },
      { id: "bg-2", d: "M548 238 C528 252 514 272 508 292" },
      { id: "bg-3", d: "M508 292 C526 284 552 280 580 280" },
      { id: "bg-4", d: "M580 280 C592 234 586 196 558 172" },
      { id: "bg-5", d: "M516 350 C520 308 530 268 548 238" },
      { id: "bg-6", d: "M492 316 C500 306 504 298 508 292" },
    ],
    lesions: [
      {
        id: "left-substantia-nigra",
        code: "BG-01",
        name: "Left substantia nigra",
        short: "Dopaminergic modulation loss",
        coord: { x: 516, y: 350 },
        affectedSegments: ["bg-5", "bg-1", "bg-2", "bg-3", "bg-4"],
        signal: "Dopamine drive reduced",
        laterality: "Contralateral movement bias",
        findingTitle: "Right parkinsonian bradykinesia pattern",
        summary:
          "Loss of left nigrostriatal dopamine biases basal ganglia output against movement initiation, producing right-sided bradykinesia and rigidity.",
        motor: "Right bradykinesia, rigidity, reduced arm swing, resting tremor possible",
        sensory: "No primary sensory tract loss",
        reflexes: "Reflexes may be normal; tone is increased through extrapyramidal circuitry",
        clinicalLaterality: "Contralateral body predominance",
        pattern: "Hypokinetic basal ganglia syndrome",
        network: "Substantia nigra pars compacta to striatum",
        pitfall: "Rigidity and bradykinesia are not the same as corticospinal UMN weakness.",
        clue: "Slow initiation with preserved pyramidal strength points to basal ganglia modulation.",
        reasoning: [
          "Nigrostriatal dopamine facilitates intended movement through basal ganglia loops.",
          "Left loop dysfunction affects left motor cortex output, which controls the right body.",
          "Thalamocortical drive becomes under-released for movement initiation.",
          "The result is contralateral hypokinetic movement rather than a sensory level.",
        ],
      },
      {
        id: "left-subthalamic-nucleus",
        code: "BG-02",
        name: "Left subthalamic nucleus",
        short: "Indirect pathway brake lesion",
        coord: { x: 492, y: 316 },
        affectedSegments: ["bg-6", "bg-3", "bg-4"],
        signal: "Indirect brake weakened",
        laterality: "Contralateral hyperkinesia",
        findingTitle: "Right hemiballismus",
        summary:
          "A left subthalamic nucleus lesion reduces the indirect pathway brake, causing excessive contralateral proximal flinging movements.",
        motor: "Right ballistic, large-amplitude involuntary movements",
        sensory: "No primary sensory deficit",
        reflexes: "Reflexes are not the primary abnormality",
        clinicalLaterality: "Contralateral hyperkinetic movement",
        pattern: "Hyperkinetic indirect pathway lesion",
        network: "Subthalamic nucleus to GPi/SNr",
        pitfall: "Hemiballismus can look dramatic but does not localize to cerebellar dysmetria.",
        clue: "Large-amplitude flinging movements point to subthalamic nucleus involvement.",
        reasoning: [
          "The subthalamic nucleus helps excite GPi/SNr output that suppresses unwanted movement.",
          "A left lesion weakens this inhibitory control loop.",
          "Left cortical motor programs for the right body become over-released.",
          "The clinical result is right hemiballismus rather than weakness.",
        ],
      },
      {
        id: "right-putamen",
        code: "BG-03",
        name: "Right putamen",
        short: "Striatal movement-selection lesion",
        coord: { x: 548, y: 238 },
        affectedSegments: ["bg-2", "bg-3", "bg-4"],
        signal: "Striatal gating disorganized",
        laterality: "Contralateral movement pattern",
        findingTitle: "Left choreiform or dystonic movement risk",
        summary:
          "A right putaminal lesion disrupts striatal selection of motor programs, producing contralateral involuntary movement or dystonic posturing.",
        motor: "Left chorea, dystonia, impaired movement scaling, or lacunar-adjacent motor signs",
        sensory: "No primary sensory loss unless nearby capsule or thalamus is involved",
        reflexes: "Reflex pattern depends on adjacent corticospinal involvement",
        clinicalLaterality: "Contralateral body predominance",
        pattern: "Striatal movement selection failure",
        network: "Putamen within basal ganglia loop",
        pitfall: "Pure basal ganglia lesions can spare pyramidal strength.",
        clue: "Involuntary movement with minimal sensory deficit points to striatal circuitry.",
        reasoning: [
          "The putamen receives motor cortical input and helps select desired actions.",
          "Right-sided loop dysfunction affects motor programs expressed by the left body.",
          "The pallidal-thalamic gate becomes poorly regulated.",
          "Clinical findings depend on whether adjacent internal capsule fibers are also injured.",
        ],
      },
    ],
  },
  {
    id: "olfactory",
    name: "Olfactory Pathway",
    type: "Special Sensory",
    complexity: "Intermediate",
    color: "#91e6bc",
    description: "CN I, olfactory bulb, tract, orbitofrontal awareness",
    origin: "Olfactory epithelium and cribriform fila",
    decussation: "No obligatory thalamic relay before primary olfactory cortex",
    rule: "Peripheral CN I lesions cause ipsilateral anosmia; orbitofrontal lesions impair odor identification",
    pattern: "Special sensory pathway with early cortical access",
    network: "Olfactory fila, bulb, tract, piriform cortex, orbitofrontal cortex",
    pitfall: "Anosmia is often peripheral or frontal-basal; it does not follow long-tract crossing rules.",
    decussationPoint: { x: 392, y: 252 },
    labels: {
      origin: { text: "Olfactory fila", x: 520, y: 326, lx: 500, ly: 318 },
      decussation: { text: "Olfactory bulb / tract", x: 276, y: 254, lx: 392, ly: 252 },
    },
    normal: {
      summary:
        "Odor information enters through CN I fila, synapses in the olfactory bulb, travels through the olfactory tract, and reaches primary olfactory and orbitofrontal networks.",
      motor: "No primary motor deficit",
      sensory: "Normal smell detection and odor identification",
      reflexes: "No standard deep tendon reflex correlate",
      laterality: "Mostly ipsilateral early olfactory input",
      pattern: "Special sensory route with early cortical processing",
      network: "CN I bulb-tract-cortical olfactory network",
      pitfall: "Olfaction does not behave like DCML or corticospinal tract crossing.",
      clue: "The intact view highlights why smell loss localizes near the anterior skull base or olfactory cortex.",
      reasoning: [
        "Olfactory receptor neurons pass through the cribriform plate.",
        "They synapse in the olfactory bulb before traveling in the olfactory tract.",
        "Primary olfactory cortex receives input without a required first thalamic relay.",
        "Orbitofrontal regions help conscious odor identification and discrimination.",
      ],
    },
    segments: [
      { id: "olf-1", d: "M500 318 C466 292 426 270 392 252" },
      { id: "olf-2", d: "M392 252 C364 226 348 196 354 166" },
      { id: "olf-3", d: "M354 166 C382 144 420 130 462 126" },
      { id: "olf-4", d: "M462 126 C500 118 534 118 568 132" },
    ],
    lesions: [
      {
        id: "cribriform-olfactory-fila",
        code: "OLF-01",
        name: "Cribriform olfactory fila",
        short: "Anterior skull base CN I lesion",
        coord: { x: 500, y: 318 },
        affectedSegments: ["olf-1", "olf-2", "olf-3", "olf-4"],
        signal: "Odor input lost at entry",
        laterality: "Ipsilateral or bilateral smell",
        findingTitle: "Anosmia after anterior skull base injury",
        summary:
          "Damage to olfactory fila at the cribriform plate removes odor input before it reaches the olfactory bulb.",
        motor: "No primary motor deficit",
        sensory: "Reduced smell detection; may be bilateral with midline trauma",
        reflexes: "No deep tendon reflex change",
        clinicalLaterality: "Ipsilateral or bilateral depending on lesion extent",
        pattern: "Peripheral special sensory input loss",
        network: "CN I fila through cribriform plate",
        pitfall: "Loss of smell after head trauma can be CN I shearing rather than cortical stroke.",
        clue: "Isolated anosmia with anterior skull base history localizes to olfactory fila or bulb.",
        reasoning: [
          "The lesion is before olfactory information reaches the bulb.",
          "Odor signals cannot enter the central olfactory pathway.",
          "Because this is a special sensory afferent, motor and reflex exams can remain normal.",
          "Bilateral symptoms suggest midline or bilateral anterior skull base involvement.",
        ],
      },
      {
        id: "left-olfactory-bulb",
        code: "OLF-02",
        name: "Left olfactory bulb",
        short: "Bulb/tract relay lesion",
        coord: { x: 392, y: 252 },
        affectedSegments: ["olf-2", "olf-3", "olf-4"],
        signal: "Bulb output interrupted",
        laterality: "Ipsilateral smell",
        findingTitle: "Left anosmia or hyposmia",
        summary:
          "A left olfactory bulb lesion disrupts ipsilateral odor processing before the olfactory tract reaches cortical olfactory regions.",
        motor: "No weakness",
        sensory: "Left-sided smell loss or reduced odor intensity",
        reflexes: "No primary reflex abnormality",
        clinicalLaterality: "Ipsilateral olfactory deficit",
        pattern: "Early olfactory relay lesion",
        network: "Olfactory bulb and tract",
        pitfall: "Unilateral smell loss can be missed unless each nostril is tested separately.",
        clue: "Unilateral anosmia points to nasal cavity, CN I fila, bulb, or tract.",
        reasoning: [
          "The bulb is still an early ipsilateral olfactory relay.",
          "A left lesion blocks left nasal odor information from reaching olfactory cortex.",
          "Other modalities remain intact because the lesion is special sensory.",
          "Testing each nostril separately reveals the lateralized deficit.",
        ],
      },
      {
        id: "orbitofrontal-olfactory-cortex",
        code: "OLF-03",
        name: "Orbitofrontal olfactory cortex",
        short: "Odor identification network lesion",
        coord: { x: 462, y: 126 },
        affectedSegments: ["olf-4"],
        signal: "Cortical odor identification degraded",
        laterality: "Complex odor recognition",
        findingTitle: "Odor identification impairment",
        summary:
          "Orbitofrontal involvement can impair conscious odor identification even when peripheral odor detection is partly preserved.",
        motor: "No primary motor deficit",
        sensory: "Difficulty naming or discriminating odors",
        reflexes: "No reflex change",
        clinicalLaterality: "Frontal olfactory association network",
        pattern: "Cortical special sensory association deficit",
        network: "Orbitofrontal and piriform olfactory processing",
        pitfall: "Detection and identification are separable; cortical lesions can affect recognition.",
        clue: "Odor recognition trouble with frontal signs suggests orbitofrontal olfactory network.",
        reasoning: [
          "Primary olfactory input can reach cortical areas without the classic thalamic relay.",
          "Orbitofrontal cortex supports conscious identification and discrimination of odors.",
          "A cortical lesion can spare basic detection more than recognition.",
          "Associated frontal behavioral signs can support the localization.",
        ],
      },
    ],
  },
  {
    id: "gustatory",
    name: "Gustatory Pathway",
    type: "Special Sensory",
    complexity: "Intermediate",
    color: "#58a9ff",
    description: "Taste afferents, nucleus solitarius, VPM, insula",
    origin: "Taste buds via CN VII, IX, and X",
    decussation: "Predominantly ipsilateral brainstem relay with bilateral cortical representation",
    rule: "Peripheral lesions are ipsilateral; central taste deficits can be subtle and mixed",
    pattern: "Special visceral afferent pathway",
    network: "Chorda tympani, glossopharyngeal/vagal taste fibers, solitary nucleus, VPM, insula",
    pitfall: "Taste loss is not the same as loss of smell; smell often dominates flavor complaints.",
    decussationPoint: { x: 548, y: 406 },
    labels: {
      origin: { text: "Taste afferents", x: 794, y: 304, lx: 770, ly: 302 },
      decussation: { text: "Nucleus solitarius", x: 572, y: 414, lx: 548, ly: 406 },
    },
    normal: {
      summary:
        "Taste afferents from CN VII, IX, and X enter the nucleus solitarius, ascend through thalamic relay, and reach insular/opercular gustatory cortex.",
      motor: "No primary motor deficit",
      sensory: "Normal taste detection and discrimination",
      reflexes: "Salivatory and gag-related circuits depend on adjacent cranial nerve pathways",
      laterality: "No focal taste deficit",
      pattern: "Peripheral ipsilateral taste input with central relay",
      network: "CN VII/IX/X taste afferents, solitary nucleus, VPM, insula",
      pitfall: "Patients may report taste loss when olfaction is actually impaired.",
      clue: "The intact pathway separates peripheral tongue taste loss from lateral medullary relay disease.",
      reasoning: [
        "Anterior tongue taste travels mainly through chorda tympani with CN VII.",
        "Posterior tongue and pharyngeal taste enter through CN IX and X.",
        "The nucleus solitarius is the key medullary relay.",
        "Thalamic and insular projections support conscious taste perception.",
      ],
    },
    segments: [
      { id: "gust-1", d: "M770 302 C700 320 620 352 548 406" },
      { id: "gust-2", d: "M548 406 C532 356 548 310 580 280" },
      { id: "gust-3", d: "M580 280 C568 250 548 228 520 210" },
      { id: "gust-4", d: "M520 210 C486 206 448 218 414 242" },
    ],
    lesions: [
      {
        id: "right-chorda-tympani",
        code: "GUST-01",
        name: "Right chorda tympani",
        short: "Peripheral anterior tongue taste lesion",
        coord: { x: 770, y: 302 },
        affectedSegments: ["gust-1", "gust-2", "gust-3", "gust-4"],
        signal: "Taste input lost before brainstem",
        laterality: "Ipsilateral anterior tongue",
        findingTitle: "Right anterior tongue taste loss",
        summary:
          "A right chorda tympani lesion removes taste from the right anterior two-thirds of the tongue before the signal reaches the solitary nucleus.",
        motor: "Facial motor function depends on whether the facial nerve trunk is also involved",
        sensory: "Right anterior tongue taste loss",
        reflexes: "Salivation may be reduced if parasympathetic fibers are also affected",
        clinicalLaterality: "Ipsilateral peripheral taste deficit",
        pattern: "CN VII special sensory afferent lesion",
        network: "Chorda tympani to nucleus solitarius",
        pitfall: "Anterior tongue general sensation is trigeminal; taste is facial nerve via chorda tympani.",
        clue: "Taste loss with facial nerve territory clues points to chorda tympani or facial nerve course.",
        reasoning: [
          "The lesion occurs before taste fibers enter the brainstem.",
          "Right anterior tongue taste cannot reach the nucleus solitarius.",
          "The deficit remains ipsilateral because it is peripheral input loss.",
          "General tongue touch can be spared because it uses trigeminal pathways.",
        ],
      },
      {
        id: "right-nucleus-solitarius",
        code: "GUST-02",
        name: "Right nucleus solitarius",
        short: "Medullary taste relay lesion",
        coord: { x: 548, y: 406 },
        affectedSegments: ["gust-2", "gust-3", "gust-4"],
        signal: "Brainstem taste relay interrupted",
        laterality: "Ipsilateral-biased taste",
        findingTitle: "Right taste loss with lateral medullary context",
        summary:
          "The nucleus solitarius receives ipsilateral taste afferents, so a right medullary relay lesion can impair right-sided taste and travel with nearby lateral medullary signs.",
        motor: "Swallowing or voice findings may appear if nucleus ambiguus is involved",
        sensory: "Right taste impairment; adjacent spinothalamic or trigeminal findings may coexist",
        reflexes: "Gag/autonomic findings depend on adjacent nuclei",
        clinicalLaterality: "Ipsilateral medullary relay",
        pattern: "Special sensory brainstem relay lesion",
        network: "Nucleus solitarius in medulla",
        pitfall: "Taste loss plus dysphagia or crossed pain-temperature signs suggests medulla, not isolated tongue disease.",
        clue: "Taste disturbance with lateral medullary signs localizes to nucleus solitarius region.",
        reasoning: [
          "Taste afferents synapse in the nucleus solitarius.",
          "A right medullary lesion interrupts this relay after peripheral input has entered.",
          "Nearby nucleus ambiguus, vestibular, trigeminal, or spinothalamic structures can refine localization.",
          "The clinical pattern is brainstem special sensory, not a cortical sensory strip deficit.",
        ],
      },
      {
        id: "left-vpm-taste",
        code: "GUST-03",
        name: "Left VPM taste relay",
        short: "Thalamic gustatory relay lesion",
        coord: { x: 580, y: 280 },
        affectedSegments: ["gust-3", "gust-4"],
        signal: "Thalamocortical taste relay degraded",
        laterality: "Mixed contralateral bias",
        findingTitle: "Central taste discrimination deficit",
        summary:
          "A thalamic taste relay lesion can impair conscious taste discrimination, often less cleanly lateralized than peripheral tongue lesions.",
        motor: "No primary weakness from isolated taste relay involvement",
        sensory: "Reduced taste discrimination or unpleasant taste distortion",
        reflexes: "No deep tendon reflex change",
        clinicalLaterality: "Central gustatory relay",
        pattern: "Thalamocortical special sensory lesion",
        network: "VPM to insular/opercular cortex",
        pitfall: "Central taste deficits are often subtle compared with peripheral CN VII/IX lesions.",
        clue: "Taste distortion with other thalamic sensory symptoms suggests VPM relay involvement.",
        reasoning: [
          "Taste information ascends from the solitary nucleus toward thalamic relay.",
          "The VPM participates in conscious special sensory representation.",
          "A central lesion may produce distorted or reduced taste discrimination.",
          "Other thalamic sensory findings can help identify the level.",
        ],
      },
    ],
  },
  {
    id: "corneal-blink-reflex",
    name: "Corneal Blink Reflex",
    type: "Reflex",
    complexity: "Intermediate",
    color: "#59d9e8",
    description: "CN V afferent, pontine interneurons, bilateral CN VII efferents",
    origin: "Corneal afferent input via trigeminal V1",
    decussation: "Bilateral pontine interneuron projection to facial nuclei",
    rule: "Afferent lesions reduce both blinks from one cornea; efferent lesions reduce one eye's blink to either stimulus",
    pattern: "Afferent-efferent reflex localization",
    network: "V1 trigeminal afferent, spinal trigeminal/principal sensory nuclei, facial nuclei, orbicularis oculi",
    pitfall: "Always compare direct and consensual blink to separate CN V input from CN VII output.",
    decussationPoint: { x: 520, y: 360 },
    labels: {
      origin: { text: "Corneal V1 input", x: 146, y: 224, lx: 190, ly: 238 },
      decussation: { text: "Pontine blink relay", x: 548, y: 368, lx: 520, ly: 360 },
    },
    normal: {
      summary:
        "Touching either cornea sends trigeminal afferent input to pontine sensory nuclei, which activate both facial nuclei to close both eyes.",
      motor: "Bilateral orbicularis oculi blink output intact",
      sensory: "Corneal sensation intact",
      reflexes: "Direct and consensual blink present from either cornea",
      laterality: "Symmetric bilateral reflex",
      pattern: "Input side versus output side logic",
      network: "CN V afferent to bilateral CN VII efferents",
      pitfall: "Loss of one eye's blink to both stimuli points efferent; loss of both blinks from one stimulus points afferent.",
      clue: "The intact loop teaches direct-versus-consensual localization.",
      reasoning: [
        "V1 carries corneal sensation into the trigeminal sensory system.",
        "Pontine interneurons project bilaterally to facial motor nuclei.",
        "Each facial nucleus drives ipsilateral orbicularis oculi closure.",
        "Testing each cornea and each eye's blink separates afferent from efferent lesions.",
      ],
    },
    segments: [
      { id: "blink-1", d: "M190 238 C266 250 340 274 430 314" },
      { id: "blink-2", d: "M430 314 C470 330 496 344 520 360" },
      { id: "blink-3", d: "M520 360 C484 384 460 408 448 418" },
      { id: "blink-4", d: "M520 360 C568 386 620 416 682 438" },
      { id: "blink-5", d: "M448 418 C360 364 268 300 190 238" },
      { id: "blink-6", d: "M682 438 C738 364 790 300 810 238" },
    ],
    lesions: [
      {
        id: "left-corneal-v1-afferent",
        code: "BLINK-01",
        name: "Left corneal V1 afferent",
        short: "Trigeminal afferent blink lesion",
        coord: { x: 190, y: 238 },
        affectedSegments: ["blink-1", "blink-2", "blink-3", "blink-4", "blink-5", "blink-6"],
        signal: "Input from left cornea lost",
        laterality: "Stimulus-side afferent",
        findingTitle: "No blink when left cornea is touched",
        summary:
          "A left V1 afferent lesion prevents left corneal input from reaching the pontine blink relay, so both direct and consensual blinks are reduced when the left cornea is stimulated.",
        motor: "Both eyes can blink when the right cornea is stimulated",
        sensory: "Left corneal sensation reduced",
        reflexes: "Left corneal stimulus fails to produce bilateral blink",
        clinicalLaterality: "Left afferent limb",
        pattern: "Afferent blink reflex lesion",
        network: "CN V1 corneal input",
        pitfall: "The left facial nerve may be normal if the left eye blinks to right corneal stimulation.",
        clue: "Failure of both eyes to blink from one corneal stimulus localizes to the afferent side.",
        reasoning: [
          "The stimulus never reaches the pontine sensory relay.",
          "Because the afferent limb is absent, neither facial nucleus receives blink drive from that cornea.",
          "The opposite cornea can still activate both facial nuclei if its afferent limb is intact.",
          "This distinguishes CN V afferent loss from CN VII efferent weakness.",
        ],
      },
      {
        id: "left-facial-efferent-blink",
        code: "BLINK-02",
        name: "Left facial efferent limb",
        short: "CN VII blink output lesion",
        coord: { x: 448, y: 418 },
        affectedSegments: ["blink-5"],
        signal: "Left blink output interrupted",
        laterality: "Output-side efferent",
        findingTitle: "Left eye fails to blink to either cornea",
        summary:
          "A left facial nucleus or nerve lesion prevents left orbicularis oculi contraction, so the left eye fails to blink whether either cornea is stimulated.",
        motor: "Left orbicularis oculi weakness; possible full LMN facial weakness",
        sensory: "Corneal sensation may be intact",
        reflexes: "Left direct and left consensual blink output reduced",
        clinicalLaterality: "Left efferent limb",
        pattern: "Efferent blink reflex lesion",
        network: "Facial nucleus/nerve to orbicularis oculi",
        pitfall: "If the right eye blinks normally to both stimuli, the sensory limb is probably intact.",
        clue: "One eye failing to blink to either corneal stimulus localizes to CN VII output on that side.",
        reasoning: [
          "Both corneas can still send sensory input to the brainstem.",
          "The left facial output limb cannot close the left eye.",
          "The right facial nucleus and nerve can still produce right eye blinking.",
          "This output-side pattern separates CN VII disease from trigeminal afferent loss.",
        ],
      },
      {
        id: "pontine-blink-interneuron",
        code: "BLINK-03",
        name: "Pontine blink interneuron relay",
        short: "Brainstem reflex integration lesion",
        coord: { x: 520, y: 360 },
        affectedSegments: ["blink-3", "blink-4", "blink-5", "blink-6"],
        signal: "Bilateral relay degraded",
        laterality: "Brainstem reflex network",
        findingTitle: "Bilateral blink reflex integration deficit",
        summary:
          "A pontine relay lesion can disrupt blink reflex integration after trigeminal input enters but before facial nuclei receive bilateral drive.",
        motor: "Blink output can be asymmetric or bilaterally reduced depending on lesion extent",
        sensory: "Primary corneal sensation may be partly preserved",
        reflexes: "Direct and consensual blink patterns become inconsistent or reduced",
        clinicalLaterality: "Pontine integration level",
        pattern: "Brainstem reflex relay lesion",
        network: "Pontine trigeminal-facial interneuron bridge",
        pitfall: "A brainstem relay lesion can mimic combined afferent and efferent problems.",
        clue: "Abnormal blink reflex with other pontine signs points to interneuron relay involvement.",
        reasoning: [
          "The lesion is after trigeminal afferent entry but before clean bilateral facial activation.",
          "Facial nuclei may be intact but underdriven by the reflex relay.",
          "Associated pontine signs help separate relay disease from isolated CN V or CN VII lesions.",
          "The direct-consensual pattern can be more complex than a pure nerve lesion.",
        ],
      },
    ],
  },
  {
    id: "language-network",
    name: "Dominant Language Network",
    type: "Cortical",
    complexity: "Advanced",
    color: "#caa2ff",
    description: "Broca, Wernicke, arcuate fasciculus, repetition logic",
    origin: "Dominant perisylvian cortex",
    decussation: "No tract crossing; dominant hemisphere network organization",
    rule: "Fluency, comprehension, and repetition separate cortical language syndromes",
    pattern: "Distributed cortical network rather than simple laterality tract",
    network: "Broca area, Wernicke area, arcuate fasciculus, angular/supramarginal cortex",
    pitfall: "Aphasia is a dominant hemisphere cortical syndrome, not dysarthria.",
    decussationPoint: { x: 500, y: 220 },
    labels: {
      origin: { text: "Wernicke area", x: 292, y: 184, lx: 342, ly: 190 },
      decussation: { text: "Arcuate fasciculus", x: 430, y: 222, lx: 500, ly: 220 },
    },
    normal: {
      summary:
        "Dominant perisylvian language regions coordinate comprehension, speech production, naming, and repetition through cortical association pathways.",
      motor: "Speech articulation and language production coordinated",
      sensory: "Auditory and visual language comprehension intact",
      reflexes: "No reflex deficit",
      laterality: "Dominant hemisphere language network intact",
      pattern: "Fluency-comprehension-repetition matrix",
      network: "Temporal comprehension cortex linked to frontal expression cortex",
      pitfall: "Slurred speech with normal language is dysarthria, not aphasia.",
      clue: "The intact map emphasizes network disconnection rather than crossing.",
      reasoning: [
        "Posterior temporal cortex supports comprehension of language.",
        "Inferior frontal cortex supports effortful language output and syntax.",
        "The arcuate fasciculus links comprehension and production regions for repetition.",
        "Different lesion nodes create different aphasia profiles.",
      ],
    },
    segments: [
      { id: "lang-1", d: "M342 190 C384 164 442 154 504 164" },
      { id: "lang-2", d: "M504 164 C560 176 604 210 628 252" },
      { id: "lang-3", d: "M342 190 C392 232 456 248 534 236" },
      { id: "lang-4", d: "M534 236 C570 242 600 248 628 252" },
      { id: "lang-5", d: "M342 190 C312 230 302 270 316 308" },
    ],
    lesions: [
      {
        id: "dominant-broca",
        code: "LAN-01",
        name: "Dominant Broca area",
        short: "Nonfluent expressive aphasia",
        coord: { x: 628, y: 252 },
        affectedSegments: ["lang-2", "lang-4"],
        signal: "Expressive language node interrupted",
        laterality: "Dominant hemisphere",
        findingTitle: "Broca aphasia",
        summary:
          "A dominant inferior frontal lesion produces nonfluent, effortful speech with relatively preserved comprehension and impaired repetition.",
        motor: "May include right face/arm weakness if adjacent motor cortex is involved",
        sensory: "Language comprehension relatively preserved",
        reflexes: "No primary reflex finding from language cortex alone",
        clinicalLaterality: "Dominant frontal language cortex",
        pattern: "Nonfluent aphasia: comprehension better than output",
        network: "Inferior frontal expressive language node",
        pitfall: "Broca aphasia is not simply weak mouth muscles; language formulation is impaired.",
        clue: "Effortful speech with awareness of errors points toward dominant inferior frontal cortex.",
        reasoning: [
          "Broca area supports fluent motor planning and production of language.",
          "A lesion here degrades expressive output and repetition.",
          "Posterior comprehension areas may still decode language relatively well.",
          "Nearby motor cortex involvement can add contralateral face or arm weakness.",
        ],
      },
      {
        id: "dominant-wernicke",
        code: "LAN-02",
        name: "Dominant Wernicke area",
        short: "Fluent receptive aphasia",
        coord: { x: 342, y: 190 },
        affectedSegments: ["lang-1", "lang-3", "lang-5"],
        signal: "Comprehension node interrupted",
        laterality: "Dominant hemisphere",
        findingTitle: "Wernicke aphasia",
        summary:
          "A dominant posterior temporal lesion produces fluent but poorly meaningful speech with impaired comprehension and impaired repetition.",
        motor: "No primary weakness from this node alone",
        sensory: "Auditory language comprehension impaired",
        reflexes: "No primary reflex finding",
        clinicalLaterality: "Dominant posterior temporal cortex",
        pattern: "Fluent aphasia with poor comprehension",
        network: "Posterior temporal comprehension node",
        pitfall: "Fluent speech can still be severely aphasic if comprehension is poor.",
        clue: "Fluent output with low content and poor comprehension localizes posteriorly.",
        reasoning: [
          "Posterior temporal language cortex maps sound into meaning.",
          "The patient can generate speech rhythm and grammar but loses semantic control.",
          "Repetition fails because the comprehension node is damaged.",
          "Motor strength can be normal because primary motor pathways are not required for comprehension.",
        ],
      },
      {
        id: "dominant-arcuate",
        code: "LAN-03",
        name: "Dominant arcuate fasciculus",
        short: "Conduction aphasia disconnection",
        coord: { x: 500, y: 220 },
        affectedSegments: ["lang-3", "lang-4"],
        signal: "Language nodes disconnected",
        laterality: "Dominant hemisphere",
        findingTitle: "Conduction aphasia",
        summary:
          "An arcuate fasciculus lesion disconnects comprehension from speech production, causing disproportionately impaired repetition.",
        motor: "No primary motor weakness from the tract alone",
        sensory: "Comprehension relatively preserved",
        reflexes: "No primary reflex finding",
        clinicalLaterality: "Dominant perisylvian disconnection",
        pattern: "Fluent speech and comprehension with poor repetition",
        network: "Arcuate fasciculus language bridge",
        pitfall: "Poor repetition with good comprehension is a disconnection pattern, not pure Wernicke aphasia.",
        clue: "Repetition failure out of proportion to fluency and comprehension points to arcuate fasciculus.",
        reasoning: [
          "Comprehension and production nodes can remain partly intact.",
          "The connecting pathway that transfers phonologic information is interrupted.",
          "Spontaneous speech can be fluent and comprehension can be decent.",
          "Repetition collapses because the network bridge is damaged.",
        ],
      },
    ],
  },
  {
    id: "spinal-hemisection",
    name: "Spinal Hemisection Pattern",
    type: "Integrated",
    complexity: "Integrated",
    color: "#f3cd5a",
    description: "Brown-Sequard logic across motor, DCML, and spinothalamic systems",
    origin: "Left spinal cord long tracts",
    decussation: "Mixed: CST/DCML crossed in medulla; spinothalamic crossed in cord",
    rule: "Ipsilateral UMN/DCML loss plus contralateral pain-temperature loss below lesion",
    pattern: "Multi-tract spinal cord syndrome",
    network: "Lateral corticospinal, dorsal column, spinothalamic tracts",
    pitfall: "A hemicord lesion produces both ipsilateral and contralateral findings because the tracts cross at different levels.",
    decussationPoint: { x: 500, y: 590 },
    labels: {
      origin: { text: "Left cord tracts", x: 358, y: 672, lx: 430, ly: 646 },
      decussation: { text: "Mixed crossing rules", x: 536, y: 600, lx: 500, ly: 590 },
    },
    normal: {
      summary:
        "The hemicord contains already-crossed motor fibers, uncrossed dorsal column fibers, and already-crossed spinothalamic fibers from the opposite body.",
      motor: "Normal ipsilateral corticospinal output below the level",
      sensory: "Normal ipsilateral dorsal column and contralateral pain-temperature transmission",
      reflexes: "Normal reflexes above, at, and below the level",
      laterality: "No mixed laterality pattern",
      pattern: "Integrated comparison of three crossing rules",
      network: "CST, DCML, and STT in one spinal level",
      pitfall: "Do not force every sensory deficit to the same side in cord syndromes.",
      clue: "The intact view shows why Brown-Sequard syndrome is a crossing-rule problem.",
      reasoning: [
        "Lateral corticospinal fibers have crossed in the medulla and descend ipsilaterally.",
        "Dorsal column fibers ascend ipsilaterally until they cross in the medulla.",
        "Spinothalamic fibers cross near entry and ascend contralaterally.",
        "A hemicord lesion therefore combines different laterality rules in one syndrome.",
      ],
    },
    segments: [
      { id: "hemi-cst-1", d: "M430 646 C438 604 444 560 450 516" },
      { id: "hemi-cst-2", d: "M450 516 C456 468 462 424 470 382" },
      { id: "hemi-dc-1", d: "M396 646 C402 604 408 560 416 516" },
      { id: "hemi-dc-2", d: "M416 516 C424 468 432 424 442 382" },
      { id: "hemi-st-1", d: "M570 646 C536 618 504 600 474 588" },
      { id: "hemi-st-2", d: "M474 588 C462 540 460 488 468 438" },
      { id: "hemi-st-3", d: "M468 438 C478 390 500 348 532 316" },
    ],
    lesions: [
      {
        id: "left-t10-hemicord",
        code: "HEMI-01",
        name: "Left T10 hemicord",
        short: "Classic Brown-Sequard pattern",
        coord: { x: 456, y: 516 },
        affectedSegments: ["hemi-cst-2", "hemi-dc-2", "hemi-st-2", "hemi-st-3"],
        signal: "Multiple tract rules interrupted",
        laterality: "Mixed",
        findingTitle: "Left Brown-Sequard pattern below T10",
        summary:
          "A left hemicord lesion produces ipsilateral UMN weakness and dorsal column loss below the level, plus contralateral pain-temperature loss beginning below the lesion.",
        motor: "Left UMN weakness below T10 with possible segmental LMN signs at T10",
        sensory: "Left vibration/proprioception loss below T10; right pain-temperature loss below the crossing offset",
        reflexes: "Left hyperreflexia below lesion; segmental reflex changes at the level may occur",
        clinicalLaterality: "Ipsilateral motor/DCML plus contralateral STT",
        pattern: "Brown-Sequard mixed crossing syndrome",
        network: "CST, DCML, and STT at the same cord level",
        pitfall: "The pain-temperature deficit begins a few levels below because STT fibers ascend before crossing.",
        clue: "A clean split between ipsilateral vibration/weakness and contralateral pain-temperature localizes to hemicord.",
        reasoning: [
          "The left corticospinal tract already controls the left body below medullary decussation.",
          "The left dorsal column carries left vibration and position sense until the medulla.",
          "Right body pain and temperature crossed early and now ascend in the left anterolateral cord.",
          "One left hemicord lesion therefore causes bilateral but modality-specific findings.",
        ],
      },
      {
        id: "left-central-cord",
        code: "HEMI-02",
        name: "Central cord crossing fibers",
        short: "Segmental STT crossing lesion",
        coord: { x: 500, y: 590 },
        affectedSegments: ["hemi-st-1"],
        signal: "Commissural STT fibers interrupted",
        laterality: "Bilateral segmental",
        findingTitle: "Suspended bilateral pain-temperature loss",
        summary:
          "A central cord lesion preferentially catches spinothalamic fibers while they cross, producing bilateral segmental pain-temperature loss with relative dorsal column sparing.",
        motor: "Weakness depends on lesion size and anterior horn involvement",
        sensory: "Bilateral segmental pain-temperature loss; vibration and proprioception relatively spared",
        reflexes: "Segmental reflex changes if anterior horn or roots are involved",
        clinicalLaterality: "Bilateral at affected levels",
        pattern: "Central cord commissural syndrome",
        network: "Anterior white commissure and nearby segmental structures",
        pitfall: "This is not a peripheral stocking-glove pattern; it is a level-based cord syndrome.",
        clue: "A suspended pain-temperature deficit points to crossing STT fibers in central cord.",
        reasoning: [
          "Spinothalamic second-order fibers cross through the anterior white commissure.",
          "A central lesion can interrupt crossing fibers from both sides at the affected levels.",
          "Dorsal columns are posterior and can remain relatively preserved.",
          "The result is segmental bilateral pain-temperature loss rather than a full hemibody deficit.",
        ],
      },
      {
        id: "left-posterior-cord-plus-cst",
        code: "HEMI-03",
        name: "Left posterior-lateral cord",
        short: "Motor plus DCML without STT",
        coord: { x: 430, y: 646 },
        affectedSegments: ["hemi-cst-1", "hemi-cst-2", "hemi-dc-1", "hemi-dc-2"],
        signal: "Posterior-lateral tracts interrupted",
        laterality: "Ipsilateral",
        findingTitle: "Left weakness plus vibration-position loss",
        summary:
          "A posterior-lateral cord lesion can affect ipsilateral corticospinal and dorsal column pathways while sparing much of the contralateral spinothalamic tract.",
        motor: "Left UMN weakness below the lesion",
        sensory: "Left vibration and proprioception loss below the lesion; pain-temperature may be relatively spared",
        reflexes: "Left hyperreflexia below the lesion",
        clinicalLaterality: "Ipsilateral motor and DCML",
        pattern: "Selective posterior-lateral cord syndrome",
        network: "CST plus DCML with relative STT sparing",
        pitfall: "A cord lesion can be selective; not every spinal syndrome is full Brown-Sequard.",
        clue: "Ipsilateral UMN signs plus dorsal column loss with pain-temperature sparing narrows the tract territory.",
        reasoning: [
          "The lateral corticospinal tract and dorsal columns sit close enough to be co-injured.",
          "Both produce ipsilateral deficits in the spinal cord.",
          "Spinothalamic fibers are more anterolateral and may be relatively spared.",
          "The modality pattern identifies the involved cord territory.",
        ],
      },
    ],
  },
];

const classificationSystems = [
  {
    id: "brodmann",
    name: "Brodmann",
    short: "Cortical areas",
    color: "#caa2ff",
    items: [
      {
        id: "ba4",
        code: "BA-04",
        name: "Brodmann area 4",
        short: "Primary motor cortex",
        region: "Precentral gyrus",
        signature: "Contralateral UMN weakness with somatotopic pattern",
        localization: "Cortical motor deficit: face/arm/leg distribution follows the motor homunculus.",
        pitfall: "Do not call this a lower motor neuron lesion unless there is atrophy, fasciculation, or segmental reflex loss.",
        summary:
          "BA4 is primary motor cortex. Lesions cause contralateral weakness, often with cortical clues such as face-arm predominance, aphasia, neglect, or seizure depending on hemisphere and vascular territory.",
        overlay: { type: "ellipse", cx: 558, cy: 172, rx: 30, ry: 86, rotate: -8 },
        reasoning: [
          "Primary motor cortex directly contributes to corticospinal output.",
          "The deficit is contralateral because corticospinal fibers cross in the medulla.",
          "The cortical body map makes small lesions produce focal face, arm, or leg weakness.",
          "Associated cortical signs separate BA4 lesions from internal capsule or spinal cord lesions.",
        ],
      },
      {
        id: "ba312",
        code: "BA-3/1/2",
        name: "Brodmann areas 3, 1, 2",
        short: "Primary somatosensory cortex",
        region: "Postcentral gyrus",
        signature: "Contralateral cortical sensory loss",
        localization: "Loss of discriminative touch, graphesthesia, stereognosis, and cortical sensory integration.",
        pitfall: "Normal pain-temperature does not exclude a cortical sensory lesion.",
        summary:
          "BA3, BA1, and BA2 form primary somatosensory cortex. Lesions impair contralateral cortical sensory processing, especially higher-order discriminative sensory tasks.",
        overlay: { type: "ellipse", cx: 606, cy: 190, rx: 34, ry: 74, rotate: -8 },
        reasoning: [
          "Thalamocortical sensory information reaches the postcentral gyrus.",
          "The representation is contralateral and somatotopic.",
          "Elementary sensation may be less dramatically affected than cortical sensory discrimination.",
          "Astereognosis or agraphesthesia points above peripheral nerve, root, and spinal cord levels.",
        ],
      },
      {
        id: "ba6",
        code: "BA-06",
        name: "Brodmann area 6",
        short: "Premotor and supplementary motor cortex",
        region: "Frontal motor association cortex",
        signature: "Motor planning difficulty, initiation problems, or apraxic movement",
        localization: "Higher-order motor planning upstream of primary corticospinal output.",
        pitfall: "Apraxia is not weakness; the motor system can be strong but poorly organized.",
        summary:
          "BA6 participates in motor planning and initiation. Lesions can cause impaired sequencing, initiation, or apraxia without a pure pyramidal weakness pattern.",
        overlay: { type: "ellipse", cx: 492, cy: 126, rx: 54, ry: 42, rotate: -8 },
        reasoning: [
          "Premotor regions prepare and sequence voluntary movement.",
          "Primary strength can be relatively preserved if BA4 and corticospinal tract are intact.",
          "Deficits emerge during learned, sequenced, or internally generated movements.",
          "Dominant hemisphere lesions can produce ideomotor apraxia.",
        ],
      },
      {
        id: "ba8",
        code: "BA-08",
        name: "Brodmann area 8",
        short: "Frontal eye fields",
        region: "Posterior middle frontal gyrus",
        signature: "Eyes deviate toward destructive lesion, away from irritative seizure focus",
        localization: "Cortical horizontal gaze command network",
        pitfall: "Gaze deviation from a frontal eye field lesion is not the same as an abducens nucleus palsy.",
        summary:
          "BA8 helps drive voluntary saccades to the opposite side. Destructive lesions bias gaze toward the lesion, while seizures can drive gaze away from the focus.",
        overlay: { type: "ellipse", cx: 418, cy: 142, rx: 44, ry: 28, rotate: -12 },
        reasoning: [
          "Each frontal eye field drives conjugate gaze toward the opposite side.",
          "A destructive lesion removes contraversive drive.",
          "The intact hemisphere biases the eyes toward the lesion.",
          "Brainstem gaze palsies produce different patterns because they interrupt final gaze execution pathways.",
        ],
      },
      {
        id: "ba17",
        code: "BA-17",
        name: "Brodmann area 17",
        short: "Primary visual cortex",
        region: "Calcarine cortex",
        signature: "Contralateral homonymous visual field deficit",
        localization: "Retinotopic cortical visual map; macular sparing can occur with PCA lesions.",
        pitfall: "Pupils can remain normal because the pupillary reflex does not require BA17.",
        summary:
          "BA17 is primary visual cortex. Lesions produce contralateral homonymous field loss, often with preserved pupillary reflexes.",
        overlay: { type: "ellipse", cx: 610, cy: 318, rx: 48, ry: 30, rotate: -14 },
        reasoning: [
          "Post-chiasmal visual information is organized by visual field, not by eye.",
          "Left BA17 represents the right visual field and right BA17 represents the left visual field.",
          "The pupillary light reflex branches before visual cortex.",
          "Macular sparing suggests occipital cortex or PCA territory involvement rather than optic tract.",
        ],
      },
      {
        id: "ba22",
        code: "BA-22",
        name: "Brodmann area 22",
        short: "Wernicke language cortex",
        region: "Dominant posterior superior temporal gyrus",
        signature: "Fluent aphasia with impaired comprehension",
        localization: "Dominant posterior temporal language comprehension node",
        pitfall: "Fluent speech can still be severely aphasic when content and comprehension are poor.",
        summary:
          "Dominant BA22 is classically associated with Wernicke aphasia: fluent output, poor comprehension, impaired repetition, and low semantic content.",
        overlay: { type: "ellipse", cx: 420, cy: 300, rx: 62, ry: 34, rotate: 8 },
        reasoning: [
          "Posterior temporal cortex maps heard language onto meaning.",
          "Speech production machinery can remain fluent.",
          "Semantic monitoring and comprehension are impaired.",
          "Dominant hemisphere involvement separates aphasia from non-language auditory processing deficits.",
        ],
      },
      {
        id: "ba4445",
        code: "BA-44/45",
        name: "Brodmann areas 44 and 45",
        short: "Broca language cortex",
        region: "Dominant inferior frontal gyrus",
        signature: "Nonfluent aphasia with impaired repetition",
        localization: "Dominant frontal expressive language node",
        pitfall: "Broca aphasia is language formulation failure, not just dysarthria.",
        summary:
          "Dominant BA44/45 supports expressive language. Lesions cause effortful, nonfluent speech with relatively preserved comprehension.",
        overlay: { type: "ellipse", cx: 390, cy: 230, rx: 48, ry: 34, rotate: -16 },
        reasoning: [
          "Inferior frontal language cortex organizes expressive language output.",
          "Comprehension may be better preserved because posterior language cortex remains functional.",
          "Repetition is usually impaired because the output node cannot execute the language plan.",
          "Adjacent motor cortex involvement can add contralateral face or arm weakness.",
        ],
      },
      {
        id: "ba39",
        code: "BA-39",
        name: "Brodmann area 39",
        short: "Angular gyrus",
        region: "Dominant inferior parietal lobule",
        signature: "Gerstmann pattern: agraphia, acalculia, finger agnosia, left-right disorientation",
        localization: "Dominant parietal association cortex",
        pitfall: "Angular gyrus syndromes are association deficits, not primary sensory loss.",
        summary:
          "Dominant BA39 supports symbolic and spatial-language integration. Lesions can produce Gerstmann syndrome and alexia-related deficits.",
        overlay: { type: "ellipse", cx: 560, cy: 276, rx: 48, ry: 38, rotate: -12 },
        reasoning: [
          "The angular gyrus integrates language, number, body schema, and spatial-symbolic processing.",
          "Primary strength and primary sensation can be normal.",
          "The deficits appear in calculation, writing, finger recognition, and left-right orientation.",
          "Dominant parietal localization explains why the syndrome is cognitive rather than long-tract.",
        ],
      },
    ],
  },
  {
    id: "brainstem",
    name: "Brainstem",
    short: "Crossed signs",
    color: "#59d9e8",
    items: [
      {
        id: "weber",
        code: "MID-WEB",
        name: "Weber syndrome",
        short: "Ventral midbrain",
        region: "Cerebral peduncle and CN III fascicles",
        signature: "Ipsilateral CN III palsy with contralateral hemiparesis",
        localization: "Ventral midbrain lesion affecting oculomotor fascicles plus corticospinal tract.",
        pitfall: "A peripheral CN III palsy alone should not create contralateral UMN weakness.",
        summary:
          "Weber syndrome localizes to the ventral midbrain, where CN III fascicles and descending corticospinal fibers travel close together.",
        overlay: { type: "ellipse", cx: 505, cy: 372, rx: 28, ry: 30, rotate: 6 },
        reasoning: [
          "CN III fascicles exit through the midbrain on the lesion side.",
          "Corticospinal fibers above the pyramidal decussation carry commands for the opposite body.",
          "A single ventral midbrain lesion can hit both systems.",
          "The result is ipsilateral ocular motor palsy with contralateral UMN weakness.",
        ],
      },
      {
        id: "lateral-medulla",
        code: "MED-LAT",
        name: "Lateral medullary syndrome",
        short: "Wallenberg pattern",
        region: "Lateral medulla, often PICA/vertebral territory",
        signature: "Dysphagia, vertigo, ipsilateral face pain-temperature loss, contralateral body pain-temperature loss, Horner syndrome",
        localization: "Lateral medulla with crossed face-body sensory findings.",
        pitfall: "Motor weakness may be absent because the corticospinal tract is more medial.",
        summary:
          "Lateral medullary lesions combine vestibular, nucleus ambiguus, spinal trigeminal, spinothalamic, and sympathetic findings.",
        overlay: { type: "ellipse", cx: 520, cy: 472, rx: 22, ry: 42, rotate: -8 },
        reasoning: [
          "Spinal trigeminal involvement causes ipsilateral facial pain-temperature loss.",
          "Spinothalamic involvement causes contralateral body pain-temperature loss.",
          "Nucleus ambiguus involvement causes dysphagia and hoarseness.",
          "Descending sympathetic fiber involvement causes ipsilateral Horner syndrome.",
        ],
      },
      {
        id: "medial-medulla",
        code: "MED-MED",
        name: "Medial medullary syndrome",
        short: "ASA medullary pattern",
        region: "Medial medulla",
        signature: "Contralateral weakness, contralateral DCML loss, ipsilateral tongue weakness",
        localization: "Pyramid, medial lemniscus, and hypoglossal fibers.",
        pitfall: "Tongue deviation localizes the lesion side; limb findings are contralateral.",
        summary:
          "Medial medullary lesions affect corticospinal tract, medial lemniscus, and hypoglossal fibers in a compact medial territory.",
        overlay: { type: "ellipse", cx: 501, cy: 482, rx: 18, ry: 44, rotate: 0 },
        reasoning: [
          "Pyramidal tract damage above decussation causes contralateral weakness.",
          "Medial lemniscus damage causes contralateral vibration and proprioception loss.",
          "Hypoglossal fascicle damage causes ipsilateral tongue weakness.",
          "The combination points medial rather than lateral medulla.",
        ],
      },
      {
        id: "aica",
        code: "PON-AICA",
        name: "Lateral pontine syndrome",
        short: "AICA territory",
        region: "Lateral caudal pons",
        signature: "Facial weakness, hearing/vestibular findings, ipsilateral face and contralateral body pain-temperature loss",
        localization: "Lateral pons with CN VII/VIII and sensory tract involvement.",
        pitfall: "Facial paralysis plus hearing findings suggests pons/AICA, not isolated Bell palsy.",
        summary:
          "AICA territory lateral pontine lesions can combine facial nucleus/fascicle, vestibulocochlear, trigeminal, and spinothalamic signs.",
        overlay: { type: "ellipse", cx: 524, cy: 432, rx: 24, ry: 34, rotate: -12 },
        reasoning: [
          "CN VII involvement causes ipsilateral lower motor neuron facial weakness.",
          "CN VIII or labyrinthine artery involvement can add hearing loss and vertigo.",
          "Spinal trigeminal involvement affects ipsilateral facial pain-temperature.",
          "Spinothalamic tract involvement affects contralateral body pain-temperature.",
        ],
      },
      {
        id: "locked-in",
        code: "PON-BAS",
        name: "Locked-in syndrome",
        short: "Ventral pons",
        region: "Basis pontis, often basilar artery territory",
        signature: "Quadriplegia and anarthria with preserved consciousness and vertical eye movements",
        localization: "Bilateral ventral pontine corticospinal and corticobulbar tract injury.",
        pitfall: "Preserved awareness separates locked-in syndrome from coma.",
        summary:
          "A large ventral pontine lesion can disconnect motor output while sparing consciousness and vertical gaze pathways.",
        overlay: { type: "ellipse", cx: 502, cy: 430, rx: 32, ry: 48, rotate: 0 },
        reasoning: [
          "Descending corticospinal tracts are interrupted bilaterally.",
          "Corticobulbar output is also interrupted, causing anarthria.",
          "The reticular activating system can remain intact, preserving consciousness.",
          "Vertical eye movements may remain because their circuitry is rostral to the lesion.",
        ],
      },
      {
        id: "ino",
        code: "PON-MLF",
        name: "Internuclear ophthalmoplegia",
        short: "MLF lesion",
        region: "Medial longitudinal fasciculus in pons or midbrain",
        signature: "Ipsilateral adduction deficit with contralateral abducting nystagmus",
        localization: "Internuclear disconnection between CN VI and CN III nuclei.",
        pitfall: "INO is not a complete CN III palsy; pupils and convergence can be preserved.",
        summary:
          "An MLF lesion disconnects horizontal gaze coordination, producing impaired adduction of the eye on the lesion side during conjugate gaze.",
        overlay: { type: "ellipse", cx: 498, cy: 390, rx: 18, ry: 42, rotate: 0 },
        reasoning: [
          "The abducens nucleus drives the ipsilateral lateral rectus.",
          "It also sends internuclear fibers through the contralateral MLF.",
          "The MLF activates the medial rectus subnucleus for yoked gaze.",
          "A lesion causes adduction failure on the side of the injured MLF.",
        ],
      },
    ],
  },
  {
    id: "spinal",
    name: "Spinal Cord",
    short: "Cord syndromes",
    color: "#f3cd5a",
    items: [
      {
        id: "brown-sequard",
        code: "CORD-BS",
        name: "Brown-Sequard syndrome",
        short: "Hemicord lesion",
        region: "One lateral half of the spinal cord",
        signature: "Ipsilateral UMN/DCML loss plus contralateral pain-temperature loss",
        localization: "Hemicord lesion below the medullary crossings and after spinothalamic crossing.",
        pitfall: "The spinothalamic deficit starts a few levels below the lesion.",
        summary:
          "Brown-Sequard syndrome is a mixed laterality pattern caused by different tract crossing levels in the spinal cord.",
        overlay: { type: "ellipse", cx: 480, cy: 588, rx: 20, ry: 86, rotate: 0 },
        reasoning: [
          "Corticospinal fibers have already crossed in the medulla and descend ipsilaterally.",
          "Dorsal column fibers ascend ipsilaterally until the medulla.",
          "Spinothalamic fibers cross near entry and ascend contralaterally.",
          "A hemicord lesion therefore creates ipsilateral motor/DCML loss and contralateral pain-temperature loss.",
        ],
      },
      {
        id: "anterior-cord",
        code: "CORD-ANT",
        name: "Anterior cord syndrome",
        short: "ASA territory",
        region: "Anterior two-thirds of spinal cord",
        signature: "Bilateral motor and pain-temperature loss with dorsal column sparing",
        localization: "Anterior spinal artery territory affecting corticospinal and spinothalamic pathways.",
        pitfall: "Preserved vibration/proprioception is the clue that posterior columns are spared.",
        summary:
          "Anterior cord lesions affect motor and pain-temperature pathways while sparing posterior column modalities.",
        overlay: { type: "ellipse", cx: 500, cy: 594, rx: 30, ry: 78, rotate: 0 },
        reasoning: [
          "The anterior spinal artery supplies anterior cord territories.",
          "Corticospinal and spinothalamic tracts can be damaged bilaterally.",
          "Posterior columns are supplied differently and may remain intact.",
          "The syndrome is recognized by motor loss plus pain-temperature loss with preserved DCML modalities.",
        ],
      },
      {
        id: "central-cord",
        code: "CORD-CEN",
        name: "Central cord syndrome",
        short: "Commissural and central gray lesion",
        region: "Central cervical cord",
        signature: "Upper extremity weakness greater than lower extremity weakness; suspended pain-temperature loss",
        localization: "Central cord with anterior white commissure and medial corticospinal fiber vulnerability.",
        pitfall: "The sensory loss can be segmental rather than a clean hemibody pattern.",
        summary:
          "Central cord lesions preferentially affect crossing spinothalamic fibers and medial motor representations, often producing arm-predominant weakness.",
        overlay: { type: "ellipse", cx: 496, cy: 594, rx: 14, ry: 52, rotate: 0 },
        reasoning: [
          "Crossing spinothalamic fibers pass through the anterior white commissure.",
          "Central expansion damages segmental crossing fibers bilaterally.",
          "Cervical central cord lesions often affect upper extremity motor pathways more than lower extremities.",
          "Dorsal column function may be relatively spared early.",
        ],
      },
      {
        id: "posterior-cord",
        code: "CORD-POST",
        name: "Posterior cord syndrome",
        short: "Dorsal column lesion",
        region: "Posterior columns",
        signature: "Loss of vibration, proprioception, and sensory ataxia with preserved strength",
        localization: "Dorsal column-predominant cord lesion.",
        pitfall: "Ataxia from proprioceptive loss can mimic cerebellar ataxia.",
        summary:
          "Posterior cord lesions disrupt dorsal column modalities, producing sensory ataxia and impaired position sense.",
        overlay: { type: "ellipse", cx: 492, cy: 586, rx: 12, ry: 84, rotate: 0 },
        reasoning: [
          "The dorsal columns carry vibration, proprioception, and discriminative touch.",
          "Loss of position sense causes sensory ataxia.",
          "Strength can be preserved if corticospinal tracts are spared.",
          "Romberg worsening with eyes closed supports sensory rather than cerebellar ataxia.",
        ],
      },
      {
        id: "conus",
        code: "CORD-CON",
        name: "Conus medullaris syndrome",
        short: "Terminal cord lesion",
        region: "Sacral cord and conus",
        signature: "Early bladder/bowel dysfunction, saddle anesthesia, mixed UMN/LMN signs",
        localization: "Terminal spinal cord rather than peripheral roots alone.",
        pitfall: "Conus can be more symmetric and bladder-predominant than cauda equina.",
        summary:
          "Conus medullaris lesions affect sacral cord segments, often producing early sphincter dysfunction and saddle sensory changes.",
        overlay: { type: "ellipse", cx: 498, cy: 658, rx: 32, ry: 30, rotate: 0 },
        reasoning: [
          "The conus contains terminal cord segments, including sacral autonomic circuitry.",
          "Bladder and bowel dysfunction can appear early.",
          "Sensory symptoms can involve saddle distribution.",
          "Because cord segments are involved, signs may mix upper and lower motor neuron features.",
        ],
      },
      {
        id: "cauda",
        code: "CORD-CE",
        name: "Cauda equina syndrome",
        short: "Lumbosacral root lesion",
        region: "Nerve roots below the conus",
        signature: "Asymmetric radicular pain, LMN weakness, saddle anesthesia, bladder dysfunction",
        localization: "Peripheral lumbosacral root bundle below the spinal cord.",
        pitfall: "Root-level LMN signs distinguish cauda equina from many cord syndromes.",
        summary:
          "Cauda equina syndrome is a root syndrome, not a cord tract syndrome. It produces LMN and radicular patterns.",
        overlay: { type: "ellipse", cx: 496, cy: 690, rx: 54, ry: 14, rotate: 0 },
        reasoning: [
          "The cauda equina consists of peripheral nerve roots below the conus.",
          "Root compression produces radicular pain and lower motor neuron weakness.",
          "Saddle anesthesia and sphincter symptoms can occur.",
          "Asymmetry and radicular pain help separate it from conus medullaris lesions.",
        ],
      },
    ],
  },
  {
    id: "subcortical",
    name: "Subcortical",
    short: "Deep relays",
    color: "#7cc7ff",
    items: [
      {
        id: "internal-capsule-class",
        code: "DEEP-IC",
        name: "Internal capsule",
        short: "Compact projection fibers",
        region: "Posterior limb and genu of internal capsule",
        signature: "Dense contralateral face, arm, and leg motor or sensory deficit",
        localization: "Subcortical bottleneck where many descending and ascending fibers compact together.",
        pitfall: "Capsular lesions can look cortical in severity, but aphasia, neglect, seizure, and visual cortical signs may be absent.",
        summary:
          "Internal capsule lesions create high-density motor, sensory, or mixed deficits because many projection fibers pass through a small deep white matter region.",
        overlay: { type: "ellipse", cx: 352, cy: 530, rx: 14, ry: 48, rotate: 11 },
        reasoning: [
          "Corticospinal and thalamocortical fibers are tightly packed in the capsule.",
          "A small lesion can affect face, arm, and leg together.",
          "The deficit is usually contralateral because fibers are above their motor or sensory decussations.",
          "Lack of cortical association signs helps separate capsular from cortical localization.",
        ],
      },
      {
        id: "thalamus-class",
        code: "DEEP-THAL",
        name: "Thalamic sensory relay",
        short: "VPL/VPM lesion",
        region: "Ventral posterior thalamus",
        signature: "Contralateral hemisensory loss, sometimes with thalamic pain",
        localization: "Deep sensory relay after major somatosensory crossings.",
        pitfall: "A thalamic lesion can affect multiple sensory modalities without a spinal sensory level.",
        summary:
          "Thalamic relay lesions produce contralateral sensory deficits because body and face sensory pathways have already crossed before reaching VPL and VPM.",
        overlay: { type: "ellipse", cx: 337, cy: 537, rx: 22, ry: 17, rotate: 0 },
        reasoning: [
          "Dorsal column, spinothalamic, and trigeminal sensory pathways relay through thalamic nuclei.",
          "These inputs are already contralateral by the time they reach thalamus.",
          "A compact thalamic lesion can produce broad hemisensory loss.",
          "Absence of a spinal level or peripheral nerve territory supports deep relay localization.",
        ],
      },
      {
        id: "basal-ganglia-class",
        code: "DEEP-BG",
        name: "Basal ganglia",
        short: "Movement selection network",
        region: "Caudate, putamen, globus pallidus, and related loops",
        signature: "Hypokinetic or hyperkinetic movement pattern without primary pyramidal weakness",
        localization: "Motor selection and action gating loop rather than corticospinal tract injury.",
        pitfall: "Abnormal movement is not the same thing as weakness.",
        summary:
          "Basal ganglia lesions disrupt movement selection, initiation, and suppression, creating movement disorders or lacunar-adjacent syndromes.",
        overlay: { type: "ellipse", cx: 374, cy: 516, rx: 27, ry: 19, rotate: 18 },
        reasoning: [
          "Basal ganglia loops modulate cortical motor plans through thalamocortical circuits.",
          "They do not serve as the final descending motor tract.",
          "Lesions can create bradykinesia, rigidity, chorea, dystonia, or impaired initiation.",
          "Primary strength can be preserved unless adjacent capsule or corticospinal fibers are involved.",
        ],
      },
      {
        id: "corona-radiata-class",
        code: "DEEP-CR",
        name: "Corona radiata",
        short: "Fan of projection fibers",
        region: "Subcortical white matter above internal capsule",
        signature: "Contralateral motor or sensory deficit with partial somatotopic spread",
        localization: "Projection fibers between cortex and capsule.",
        pitfall: "Corona radiata lesions can be less dense than capsule lesions because fibers are more spread out.",
        summary:
          "Corona radiata lesions affect projection fibers before they compact into the internal capsule, often producing contralateral deficits with variable distribution.",
        overlay: { type: "ellipse", cx: 314, cy: 492, rx: 92, ry: 26, rotate: 0 },
        reasoning: [
          "Projection fibers fan out between cortex and internal capsule.",
          "A lesion can catch motor or sensory fibers above the capsule.",
          "Contralateral deficits occur because the involved pathways are supratentorial.",
          "More distributed fiber anatomy can make deficits less uniformly face-arm-leg than capsular lesions.",
        ],
      },
    ],
  },
  {
    id: "visual-ocular",
    name: "Visual/Ocular",
    short: "Fields and pupils",
    color: "#b48cff",
    items: [
      {
        id: "optic-nerve-class",
        code: "VIS-ON",
        name: "Optic nerve",
        short: "Pre-chiasmal lesion",
        region: "Retina to optic nerve before chiasm",
        signature: "Monocular vision loss with afferent pupillary defect",
        localization: "One eye's afferent visual input before field information mixes at the chiasm.",
        pitfall: "Monocular loss is pre-chiasmal until proven otherwise.",
        summary:
          "Optic nerve lesions remove all visual information from one eye and can produce a relative afferent pupillary defect.",
        overlay: { type: "ellipse", cx: 720, cy: 246, rx: 78, ry: 17, rotate: -4 },
        reasoning: [
          "The optic nerve carries all retinal information from one eye.",
          "The lesion is before chiasmal sorting by visual field.",
          "Both direct and consensual responses are reduced when the affected eye is stimulated.",
          "The opposite eye can still drive both pupils if its afferent limb is intact.",
        ],
      },
      {
        id: "chiasm-class",
        code: "VIS-CH",
        name: "Optic chiasm",
        short: "Bitemporal field loss",
        region: "Crossing nasal retinal fibers",
        signature: "Bitemporal hemianopia",
        localization: "Midline chiasmal lesion affecting crossing nasal retinal fibers.",
        pitfall: "Temporal visual field loss maps to nasal retina, which crosses at the chiasm.",
        summary:
          "Chiasmal lesions preferentially affect crossing nasal retinal fibers, producing bilateral temporal visual field loss.",
        overlay: { type: "ellipse", cx: 500, cy: 260, rx: 44, ry: 26, rotate: 0 },
        reasoning: [
          "Nasal retinal fibers cross in the optic chiasm.",
          "Nasal retina views temporal visual fields.",
          "A midline lesion catches crossing fibers from both eyes.",
          "The result is field-specific bilateral loss rather than monocular blindness.",
        ],
      },
      {
        id: "optic-radiation-class",
        code: "VIS-RAD",
        name: "Optic radiations",
        short: "Quadrantanopia logic",
        region: "Temporal and parietal optic radiations",
        signature: "Contralateral homonymous quadrantanopia",
        localization: "Post-chiasmal visual field pathway with lobe-specific quadrant anatomy.",
        pitfall: "Temporal radiations affect superior visual field; parietal radiations affect inferior visual field.",
        summary:
          "Optic radiation lesions create homonymous field deficits because visual information is organized by contralateral field after the chiasm.",
        overlay: { type: "ellipse", cx: 626, cy: 332, rx: 58, ry: 42, rotate: -18 },
        reasoning: [
          "After the chiasm, visual pathways represent contralateral visual space.",
          "Temporal Meyer loop carries superior visual field information.",
          "Parietal radiations carry inferior visual field information.",
          "Quadrant pattern helps separate optic radiation from optic tract and occipital cortex.",
        ],
      },
      {
        id: "pupil-class",
        code: "VIS-PUP",
        name: "Pupillary reflex lesion",
        short: "Afferent vs efferent",
        region: "Optic nerve, pretectal relay, Edinger-Westphal, CN III",
        signature: "Afferent defect changes stimulation response; efferent defect changes one pupil's constriction",
        localization: "Light reflex arc rather than conscious visual pathway alone.",
        pitfall: "A cortical visual lesion can spare pupils because the reflex branches before visual cortex.",
        summary:
          "Pupillary reflex localization separates afferent optic input, bilateral midbrain relay, and efferent parasympathetic output.",
        overlay: { type: "ellipse", cx: 508, cy: 366, rx: 38, ry: 25, rotate: 4 },
        reasoning: [
          "The afferent limb enters through retina and optic nerve.",
          "Pretectal projections activate both Edinger-Westphal nuclei.",
          "The efferent limb travels with ipsilateral CN III.",
          "Testing direct and consensual responses identifies which limb is injured.",
        ],
      },
    ],
  },
  {
    id: "cranial-peripheral",
    name: "Cranial/Peripheral",
    short: "Roots and nerves",
    color: "#58a9ff",
    items: [
      {
        id: "olfactory-class",
        code: "CN-I",
        name: "Olfactory nerve and bulb",
        short: "Smell afferent pathway",
        region: "Olfactory fila, cribriform plate, bulb, tract, and frontal-basal olfactory cortex",
        signature: "Ipsilateral anosmia or impaired odor identification",
        localization: "Special sensory CN I pathway at the anterior skull base or olfactory cortex.",
        pitfall: "Smell loss does not follow corticospinal or DCML crossing rules.",
        summary:
          "Olfactory lesions localize by entry point and cortical association level: fila or bulb lesions reduce smell detection, while orbitofrontal lesions impair odor identification.",
        overlay: { type: "ellipse", cx: 350, cy: 250, rx: 54, ry: 22, rotate: -12 },
        reasoning: [
          "CN I fila pass through the cribriform plate to the olfactory bulb.",
          "The olfactory tract reaches cortical olfactory networks early.",
          "Peripheral lesions produce ipsilateral smell loss.",
          "Frontal-basal cortical lesions can impair conscious identification of odors.",
        ],
      },
      {
        id: "taste-afferent-class",
        code: "TASTE",
        name: "Taste afferent pathway",
        short: "CN VII/IX/X to solitary nucleus",
        region: "Chorda tympani, glossopharyngeal and vagal taste fibers, nucleus solitarius",
        signature: "Ipsilateral taste loss peripherally; medullary taste relay signs centrally",
        localization: "Special visceral afferent pathway entering the medulla.",
        pitfall: "Anterior tongue taste is CN VII, while anterior tongue touch is CN V.",
        summary:
          "Taste pathway lesions separate peripheral cranial nerve input from nucleus solitarius and thalamocortical relay disease.",
        overlay: { type: "ellipse", cx: 520, cy: 470, rx: 28, ry: 34, rotate: -10 },
        reasoning: [
          "Taste fibers enter through CN VII, IX, and X.",
          "They synapse in the nucleus solitarius in the medulla.",
          "Central projections reach thalamus and insular/opercular cortex.",
          "Associated facial, glossopharyngeal, vagal, or medullary findings refine the level.",
        ],
      },
      {
        id: "trigeminal-root-class",
        code: "CN-V",
        name: "Trigeminal root or ganglion",
        short: "Facial sensory entry",
        region: "Trigeminal ganglion, root, or sensory nuclei",
        signature: "Ipsilateral facial sensory loss with corneal afferent involvement",
        localization: "Peripheral or brainstem entry-level facial sensory pathway.",
        pitfall: "Contralateral face sensory loss points higher than the trigeminal ganglion/root.",
        summary:
          "Trigeminal root or ganglion lesions affect ipsilateral facial sensory input before trigeminal information crosses.",
        overlay: { type: "ellipse", cx: 548, cy: 394, rx: 38, ry: 24, rotate: -10 },
        reasoning: [
          "Facial sensory input enters through the trigeminal ganglion and root.",
          "This is before the major crossing to the contralateral thalamus.",
          "The deficit remains ipsilateral.",
          "Corneal reflex afferent impairment supports CN V involvement.",
        ],
      },
      {
        id: "facial-lmn-class",
        code: "CN-VII",
        name: "Facial nucleus or nerve",
        short: "Lower motor neuron facial weakness",
        region: "Facial nucleus, fascicle, or peripheral facial nerve",
        signature: "Ipsilateral upper and lower facial weakness",
        localization: "LMN facial output after cortical bilateral upper-face protection is bypassed.",
        pitfall: "Forehead involvement separates LMN facial palsy from a typical supranuclear lower-face lesion.",
        summary:
          "Facial nucleus or nerve lesions cause ipsilateral full-face weakness because they damage the final motor output.",
        overlay: { type: "ellipse", cx: 530, cy: 430, rx: 32, ry: 30, rotate: 10 },
        reasoning: [
          "The facial nucleus and nerve are final common pathways to ipsilateral facial muscles.",
          "A lesion here affects both upper and lower facial muscles.",
          "Cortical bilateral input can no longer protect the forehead.",
          "Blink efferent response can be reduced on the lesion side.",
        ],
      },
      {
        id: "vestibulocochlear-class",
        code: "CN-VIII",
        name: "Vestibulocochlear nerve",
        short: "Hearing and vestibular input",
        region: "CN VIII, labyrinth, and internal auditory canal",
        signature: "Ipsilateral hearing loss, vertigo, or reduced vestibulo-ocular reflex",
        localization: "Peripheral auditory or vestibular afferent input before central bilateral relays.",
        pitfall: "Peripheral vestibular lesions should not create corticospinal long-tract signs.",
        summary:
          "CN VIII lesions affect ipsilateral hearing or vestibular input before central auditory and vestibular networks distribute the signal.",
        overlay: { type: "ellipse", cx: 784, cy: 326, rx: 42, ry: 34, rotate: -10 },
        reasoning: [
          "CN VIII carries cochlear and vestibular afferent information.",
          "Peripheral loss occurs before bilateral central representation.",
          "Cochlear involvement causes ipsilateral sensorineural hearing loss.",
          "Vestibular involvement causes vertigo and abnormal head impulse testing.",
        ],
      },
      {
        id: "root-class",
        code: "ROOT",
        name: "Spinal root lesion",
        short: "Dermatome/myotome pattern",
        region: "Dorsal or ventral nerve root",
        signature: "Dermatomal sensory loss, myotomal weakness, segmental reflex change",
        localization: "Peripheral root level outside the spinal cord tracts.",
        pitfall: "A root lesion is segmental, not a long-tract sensory level.",
        summary:
          "Root lesions produce segmental patterns tied to dermatomes, myotomes, and reflex arcs rather than long-tract crossing rules.",
        overlay: { type: "ellipse", cx: 456, cy: 650, rx: 30, ry: 20, rotate: -6 },
        reasoning: [
          "Dorsal roots carry sensory input into one segment.",
          "Ventral roots carry motor output from one segment.",
          "Reflexes can drop if the afferent or efferent limb is injured.",
          "The distribution follows root anatomy rather than brainstem or cord tract decussations.",
        ],
      },
    ],
  },
  {
    id: "cerebellar",
    name: "Cerebellar",
    short: "Ataxia patterns",
    color: "#91e6bc",
    items: [
      {
        id: "cerebellar-hemisphere-class",
        code: "CER-HEM",
        name: "Cerebellar hemisphere",
        short: "Ipsilateral limb ataxia",
        region: "Lateral cerebellar hemisphere",
        signature: "Ipsilateral dysmetria, intention tremor, decomposition of movement",
        localization: "Movement calibration failure for the ipsilateral limbs.",
        pitfall: "Cerebellar lesions cause incoordination more than true pyramidal weakness.",
        summary:
          "Cerebellar hemisphere lesions produce ipsilateral limb coordination deficits because cerebellar circuits are functionally linked to the same side of the body.",
        overlay: { type: "ellipse", cx: 640, cy: 456, rx: 58, ry: 42, rotate: -12 },
        reasoning: [
          "The cerebellum calibrates timing, force, and endpoint control.",
          "Functional double-crossing makes signs usually ipsilateral.",
          "Strength can be preserved despite poor movement accuracy.",
          "Dysmetria and intention tremor point to cerebellar calibration failure.",
        ],
      },
      {
        id: "vermis-class",
        code: "CER-VER",
        name: "Cerebellar vermis",
        short: "Truncal and gait ataxia",
        region: "Midline cerebellum",
        signature: "Wide-based gait, truncal sway, impaired stance",
        localization: "Axial posture and gait coordination system.",
        pitfall: "Vermian lesions may have little isolated distal limb dysmetria.",
        summary:
          "Vermis lesions preferentially affect midline balance, posture, stance, and gait.",
        overlay: { type: "ellipse", cx: 588, cy: 444, rx: 28, ry: 50, rotate: -4 },
        reasoning: [
          "The vermis coordinates axial and proximal control.",
          "Midline lesions destabilize stance and gait.",
          "The deficit is often bilateral or axial rather than a clean limb-only pattern.",
          "Strength and primary sensation can remain relatively intact.",
        ],
      },
      {
        id: "peduncle-class",
        code: "CER-PED",
        name: "Cerebellar peduncle",
        short: "Input/output disconnection",
        region: "Superior, middle, or inferior cerebellar peduncle",
        signature: "Ataxia from disconnection of cerebellar input or output",
        localization: "Cerebellar tract bottleneck rather than cerebellar cortex itself.",
        pitfall: "Peduncle lesions can mimic cerebellar hemisphere lesions but often bring brainstem neighbors along.",
        summary:
          "Cerebellar peduncle lesions disconnect cerebellar computation from input or output pathways, producing ataxia with possible brainstem signs.",
        overlay: { type: "ellipse", cx: 538, cy: 426, rx: 30, ry: 24, rotate: -18 },
        reasoning: [
          "Peduncles carry cerebellar input and output.",
          "A lesion can interrupt correction signals without damaging cerebellar cortex directly.",
          "Ataxia remains the core sign.",
          "Adjacent brainstem involvement can add cranial nerve or long-tract findings.",
        ],
      },
    ],
  },
  {
    id: "autonomic",
    name: "Autonomic",
    short: "Horner logic",
    color: "#ff9a61",
    items: [
      {
        id: "central-horner-class",
        code: "AUT-CEN",
        name: "Central Horner pathway",
        short: "Hypothalamospinal fibers",
        region: "Hypothalamus through lateral brainstem and cervical cord",
        signature: "Ipsilateral ptosis, miosis, and anhidrosis with possible brainstem or long-tract signs",
        localization: "First-order sympathetic lesion before the ciliospinal center.",
        pitfall: "A central Horner syndrome can travel with lateral medullary or cervical cord findings.",
        summary:
          "Central Horner lesions interrupt descending sympathetic drive before it reaches the T1 ciliospinal center, so associated findings often localize the lesion to brainstem or cervical cord.",
        overlay: { type: "ellipse", cx: 522, cy: 448, rx: 24, ry: 76, rotate: -6 },
        reasoning: [
          "First-order sympathetic fibers descend from hypothalamus through lateral brainstem.",
          "They reach the ciliospinal center around C8-T2.",
          "Interruption produces ipsilateral ocular sympathetic failure.",
          "Nearby tract or cranial nerve findings separate central from peripheral Horner syndrome.",
        ],
      },
      {
        id: "preganglionic-horner-class",
        code: "AUT-PRE",
        name: "Preganglionic Horner pathway",
        short: "T1 root and sympathetic chain",
        region: "Ciliospinal center, T1 root, lung apex, and cervical sympathetic chain",
        signature: "Horner syndrome with arm pain, hand weakness, or lower brachial plexus clues",
        localization: "Second-order sympathetic lesion between spinal cord and superior cervical ganglion.",
        pitfall: "A Pancoast lesion can look ocular at first but is anatomically thoracic/apical.",
        summary:
          "Preganglionic Horner lesions damage sympathetic output after it leaves the cord but before the superior cervical ganglion, classically near T1 or the lung apex.",
        overlay: { type: "ellipse", cx: 525, cy: 565, rx: 30, ry: 42, rotate: -12 },
        reasoning: [
          "Second-order neurons leave the spinal cord near T1.",
          "They travel through the sympathetic chain toward the superior cervical ganglion.",
          "Apical lung or lower brachial plexus lesions can interrupt this route.",
          "Arm symptoms help distinguish preganglionic Horner syndrome from carotid plexus lesions.",
        ],
      },
      {
        id: "postganglionic-horner-class",
        code: "AUT-POST",
        name: "Postganglionic Horner pathway",
        short: "Carotid plexus route",
        region: "Superior cervical ganglion, internal carotid plexus, cavernous sinus",
        signature: "Horner syndrome with head or neck pain, often without anhidrosis",
        localization: "Third-order sympathetic lesion traveling with the internal carotid artery.",
        pitfall: "Painful acute postganglionic Horner syndrome should raise concern for carotid dissection.",
        summary:
          "Postganglionic Horner lesions affect fibers after the superior cervical ganglion, often along the internal carotid plexus toward the eye.",
        overlay: { type: "ellipse", cx: 790, cy: 238, rx: 54, ry: 24, rotate: -8 },
        reasoning: [
          "Third-order sympathetic fibers wrap around the internal carotid artery.",
          "They continue through the cavernous sinus toward the dilator pupillae and eyelid targets.",
          "Sweating can be spared because facial sudomotor fibers often branch earlier.",
          "Painful carotid-region localization is the key clinical warning pattern.",
        ],
      },
    ],
  },
  {
    id: "vascular",
    name: "Vascular",
    short: "Stroke territories",
    color: "#ff7a59",
    items: [
      {
        id: "mca-superior-class",
        code: "VASC-MCA-S",
        name: "MCA superior division",
        short: "Face-arm motor/language territory",
        region: "Lateral frontal cortex and insula",
        signature: "Contralateral face-arm weakness; dominant lesions can cause Broca aphasia",
        localization: "Lateral frontal motor and expressive language territory.",
        pitfall: "Leg-predominant weakness points more toward ACA than MCA.",
        summary:
          "Superior division MCA lesions often affect face-arm motor cortex and dominant frontal language output regions.",
        overlay: { type: "ellipse", cx: 548, cy: 190, rx: 80, ry: 58, rotate: -12 },
        reasoning: [
          "MCA supplies lateral frontal motor regions for face and arm.",
          "Dominant superior MCA territory includes expressive language cortex.",
          "Contralateral face-arm weakness can occur with UMN signs.",
          "Leg-predominant deficits suggest medial ACA territory instead.",
        ],
      },
      {
        id: "mca-inferior-class",
        code: "VASC-MCA-I",
        name: "MCA inferior division",
        short: "Temporal-parietal language/attention territory",
        region: "Lateral temporal and inferior parietal cortex",
        signature: "Wernicke aphasia if dominant; neglect if nondominant",
        localization: "Posterior lateral cortical association territory.",
        pitfall: "Fluent aphasia and neglect are cortical association signs, not tract-only signs.",
        summary:
          "Inferior division MCA lesions affect posterior language, auditory association, and attention networks depending on hemisphere dominance.",
        overlay: { type: "ellipse", cx: 410, cy: 288, rx: 92, ry: 58, rotate: 8 },
        reasoning: [
          "Inferior MCA supplies lateral temporal and inferior parietal association cortex.",
          "Dominant hemisphere lesions can impair comprehension.",
          "Nondominant lesions can produce spatial neglect.",
          "Primary motor deficits may be less prominent than in superior division lesions.",
        ],
      },
      {
        id: "aca-class",
        code: "VASC-ACA",
        name: "ACA territory",
        short: "Medial frontal-parietal",
        region: "Medial frontal and parietal cortex",
        signature: "Contralateral leg-predominant weakness and abulia",
        localization: "Medial motor/sensory cortex and frontal initiation network.",
        pitfall: "Leg-predominant cortical deficits are a medial hemispheric clue.",
        summary:
          "ACA lesions preferentially affect medial frontal and parietal regions, producing contralateral leg-predominant deficits and behavioral initiation changes.",
        overlay: { type: "ellipse", cx: 460, cy: 104, rx: 58, ry: 36, rotate: 0 },
        reasoning: [
          "The leg homunculus sits on the medial hemisphere.",
          "ACA supplies medial frontal and parietal cortex.",
          "Leg weakness or sensory loss can dominate.",
          "Frontal medial involvement can add abulia or impaired initiation.",
        ],
      },
      {
        id: "pca-class",
        code: "VASC-PCA",
        name: "PCA territory",
        short: "Occipital and inferomedial temporal",
        region: "Occipital cortex, thalamus, and medial temporal territory",
        signature: "Contralateral homonymous hemianopia, sometimes with macular sparing",
        localization: "Posterior visual cortex and posterior circulation territory.",
        pitfall: "Intact pupils with visual field loss points posterior to the optic tract reflex branch.",
        summary:
          "PCA territory lesions commonly affect occipital visual cortex and can produce homonymous visual field loss with preserved pupillary reflexes.",
        overlay: { type: "ellipse", cx: 614, cy: 310, rx: 66, ry: 48, rotate: -10 },
        reasoning: [
          "PCA supplies primary visual cortex.",
          "Post-chiasmal cortical visual lesions cause contralateral homonymous field deficits.",
          "Pupillary reflexes can remain intact.",
          "Thalamic or medial temporal involvement can add sensory or memory features.",
        ],
      },
      {
        id: "lacunar-class",
        code: "VASC-LAC",
        name: "Lacunar deep perforator",
        short: "Capsule/thalamus/pons small vessel",
        region: "Deep perforator territories",
        signature: "Pure motor, pure sensory, sensorimotor, or ataxic hemiparesis syndrome",
        localization: "Small deep lesion affecting compact tract or relay anatomy.",
        pitfall: "Classic lacunar syndromes lack cortical signs such as aphasia, neglect, or visual field cuts.",
        summary:
          "Lacunar lesions in deep perforator territories produce compact tract syndromes without cortical association signs.",
        overlay: { type: "ellipse", cx: 342, cy: 530, rx: 34, ry: 30, rotate: -12 },
        reasoning: [
          "Small vessel disease affects deep perforator territories.",
          "Compact pathways in capsule, thalamus, or pons are vulnerable.",
          "The clinical syndrome can be pure motor, pure sensory, or mixed.",
          "Absence of cortical signs helps identify lacunar localization.",
        ],
      },
    ],
  },
];

const lesionGroups = [
  { id: "baseline", name: "Baseline", short: "Normal reference", color: "#91e6bc" },
  { id: "cortical", name: "Cortical / Network", short: "Brodmann and association cortex", color: "#caa2ff" },
  { id: "subcortical", name: "Subcortical / Thalamic", short: "Deep relays and projection fibers", color: "#7cc7ff" },
  { id: "brainstem", name: "Brainstem", short: "Cranial nerve plus long-tract logic", color: "#59d9e8" },
  { id: "spinal", name: "Spinal Cord", short: "Cord tract and level syndromes", color: "#f3cd5a" },
  { id: "visual-ocular", name: "Visual / Ocular", short: "Fields, gaze, and pupils", color: "#b48cff" },
  { id: "cranial-peripheral", name: "Cranial Nerve / Peripheral", short: "Roots, ganglia, and nerves", color: "#58a9ff" },
  { id: "cerebellar", name: "Cerebellar", short: "Coordination and ataxia", color: "#91e6bc" },
  { id: "autonomic", name: "Autonomic", short: "Sympathetic and reflex chains", color: "#ff9a61" },
];

const lesionCategoryLinks = {
  "right-internal-capsule": { groupId: "subcortical", classifierId: "subcortical", classificationId: "internal-capsule-class" },
  "right-cerebral-peduncle": { groupId: "brainstem", classifierId: "brainstem", classificationId: "weber" },
  "right-medullary-pyramid": { groupId: "brainstem", classifierId: "brainstem", classificationId: "medial-medulla" },
  "left-cervical-cord": { groupId: "spinal", classifierId: "spinal", classificationId: "brown-sequard" },
  "left-dorsal-root": { groupId: "cranial-peripheral", classifierId: "cranial-peripheral", classificationId: "root-class" },
  "left-dorsal-column-t8": { groupId: "spinal", classifierId: "spinal", classificationId: "posterior-cord" },
  "right-medial-lemniscus-pons": { groupId: "brainstem", classifierId: "brainstem", classificationId: "medial-medulla" },
  "right-vpl": { groupId: "subcortical", classifierId: "subcortical", classificationId: "thalamus-class" },
  "anterior-white-commissure-t10": { groupId: "spinal", classifierId: "spinal", classificationId: "central-cord" },
  "left-anterolateral-t10": { groupId: "spinal", classifierId: "spinal", classificationId: "anterior-cord" },
  "left-lateral-medulla": { groupId: "brainstem", classifierId: "brainstem", classificationId: "lateral-medulla" },
  "right-vpl-spinothalamic": { groupId: "subcortical", classifierId: "subcortical", classificationId: "thalamus-class" },
  "right-optic-nerve": { groupId: "visual-ocular", classifierId: "visual-ocular", classificationId: "optic-nerve-class" },
  "optic-chiasm": { groupId: "visual-ocular", classifierId: "visual-ocular", classificationId: "chiasm-class" },
  "left-optic-tract": { groupId: "visual-ocular", classifierId: "visual-ocular", classificationId: "optic-radiation-class" },
  "right-temporal-radiation": { groupId: "visual-ocular", classifierId: "visual-ocular", classificationId: "optic-radiation-class" },
  "left-occipital-cortex": { groupId: "cortical", classifierId: "brodmann", classificationId: "ba17" },
  "right-genu-internal-capsule": { groupId: "subcortical", classifierId: "subcortical", classificationId: "internal-capsule-class" },
  "left-facial-nucleus": { groupId: "brainstem", classifierId: "cranial-peripheral", classificationId: "facial-lmn-class" },
  "right-hypoglossal-corticobulbar": { groupId: "brainstem", classifierId: "brainstem", classificationId: "medial-medulla" },
  "right-trigeminal-ganglion": { groupId: "cranial-peripheral", classifierId: "cranial-peripheral", classificationId: "trigeminal-root-class" },
  "right-spinal-trigeminal-nucleus": { groupId: "brainstem", classifierId: "brainstem", classificationId: "lateral-medulla" },
  "left-vpm": { groupId: "subcortical", classifierId: "subcortical", classificationId: "thalamus-class" },
  "right-optic-nerve-plr": { groupId: "visual-ocular", classifierId: "visual-ocular", classificationId: "optic-nerve-class" },
  "right-cn-iii-parasympathetic": { groupId: "visual-ocular", classifierId: "visual-ocular", classificationId: "pupil-class" },
  "dorsal-midbrain": { groupId: "visual-ocular", classifierId: "visual-ocular", classificationId: "pupil-class" },
  "left-cerebellar-hemisphere": { groupId: "cerebellar", classifierId: "cerebellar", classificationId: "cerebellar-hemisphere-class" },
  "left-superior-cerebellar-peduncle": { groupId: "cerebellar", classifierId: "cerebellar", classificationId: "peduncle-class" },
  vermis: { groupId: "cerebellar", classifierId: "cerebellar", classificationId: "vermis-class" },
  "right-cochlear-nerve": { groupId: "cranial-peripheral", classifierId: "cranial-peripheral", classificationId: "vestibulocochlear-class" },
  "left-lateral-lemniscus": { groupId: "brainstem", classifierId: "brainstem", classificationId: "aica" },
  "right-auditory-cortex": { groupId: "cortical", classifierId: "brodmann", classificationId: "ba22" },
  "right-vestibular-nerve": { groupId: "cranial-peripheral", classifierId: "cranial-peripheral", classificationId: "vestibulocochlear-class" },
  "left-mlf": { groupId: "brainstem", classifierId: "brainstem", classificationId: "ino" },
  "right-abducens-nucleus": { groupId: "brainstem", classifierId: "brainstem", classificationId: "ino" },
  "right-lateral-medulla-sympathetic": { groupId: "autonomic", classifierId: "autonomic", classificationId: "central-horner-class" },
  "right-pancoast": { groupId: "autonomic", classifierId: "autonomic", classificationId: "preganglionic-horner-class" },
  "right-internal-carotid-plexus": { groupId: "autonomic", classifierId: "autonomic", classificationId: "postganglionic-horner-class" },
  "dominant-broca": { groupId: "cortical", classifierId: "brodmann", classificationId: "ba4445" },
  "dominant-wernicke": { groupId: "cortical", classifierId: "brodmann", classificationId: "ba22" },
  "dominant-arcuate": { groupId: "cortical", classifierId: "brodmann", classificationId: "ba22" },
  "left-t10-hemicord": { groupId: "spinal", classifierId: "spinal", classificationId: "brown-sequard" },
  "left-central-cord": { groupId: "spinal", classifierId: "spinal", classificationId: "central-cord" },
  "left-posterior-cord-plus-cst": { groupId: "spinal", classifierId: "spinal", classificationId: "posterior-cord" },
  "left-substantia-nigra": { groupId: "subcortical", classifierId: "subcortical", classificationId: "basal-ganglia-class" },
  "left-subthalamic-nucleus": { groupId: "subcortical", classifierId: "subcortical", classificationId: "basal-ganglia-class" },
  "right-putamen": { groupId: "subcortical", classifierId: "subcortical", classificationId: "basal-ganglia-class" },
  "cribriform-olfactory-fila": { groupId: "cranial-peripheral", classifierId: "cranial-peripheral", classificationId: "olfactory-class" },
  "left-olfactory-bulb": { groupId: "cranial-peripheral", classifierId: "cranial-peripheral", classificationId: "olfactory-class" },
  "orbitofrontal-olfactory-cortex": { groupId: "cortical", classifierId: "cranial-peripheral", classificationId: "olfactory-class" },
  "right-chorda-tympani": { groupId: "cranial-peripheral", classifierId: "cranial-peripheral", classificationId: "taste-afferent-class" },
  "right-nucleus-solitarius": { groupId: "brainstem", classifierId: "cranial-peripheral", classificationId: "taste-afferent-class" },
  "left-vpm-taste": { groupId: "subcortical", classifierId: "subcortical", classificationId: "thalamus-class" },
  "left-corneal-v1-afferent": { groupId: "cranial-peripheral", classifierId: "cranial-peripheral", classificationId: "trigeminal-root-class" },
  "left-facial-efferent-blink": { groupId: "cranial-peripheral", classifierId: "cranial-peripheral", classificationId: "facial-lmn-class" },
  "pontine-blink-interneuron": { groupId: "brainstem", classifierId: "brainstem", classificationId: "aica" },
};

const crossSections = [
  {
    id: "brainstem",
    name: "Brainstem",
    title: "Brainstem axial slice",
    subtitle: "Cranial nerve nuclei, long tracts, and crossed-sign localization.",
    rule: "Brainstem lesions localize by ipsilateral cranial nerve signs plus contralateral long-tract findings.",
    structures: [
      "Dorsal tegmentum: nuclei, MLF, vestibular and sensory relays",
      "Ventral basis: corticospinal and corticobulbar output",
      "Lateral region: spinothalamic, trigeminal, sympathetic, cerebellar pathways",
      "Midline structures: medial lemniscus and ocular motor coordination",
    ],
  },
  {
    id: "spinal",
    name: "Spinal Cord",
    title: "Spinal cord axial slice",
    subtitle: "Dorsal column, corticospinal, spinothalamic, and segmental gray matter.",
    rule: "Cord syndromes are tract-territory problems: modality, side, and level must all agree.",
    structures: [
      "Dorsal column: ipsilateral vibration and proprioception below lesion",
      "Lateral corticospinal: ipsilateral UMN weakness below lesion",
      "Spinothalamic: contralateral pain-temperature loss after crossing",
      "Central gray/anterior horn: segmental LMN signs at the lesion level",
    ],
  },
];

const crossSectionLesionTargets = {
  brainstem: {
    classifications: {
      weber: { x: 410, y: 260, rx: 44, ry: 34, rotate: -10 },
      "lateral-medulla": { x: 470, y: 214, rx: 38, ry: 44, rotate: -14 },
      "medial-medulla": { x: 390, y: 248, rx: 34, ry: 44, rotate: 0 },
      aica: { x: 470, y: 190, rx: 44, ry: 40, rotate: -10 },
      "locked-in": { x: 360, y: 266, rx: 94, ry: 38, rotate: 0 },
      ino: { x: 360, y: 150, rx: 32, ry: 42, rotate: 0 },
    },
    lesions: {
      "right-cerebral-peduncle": { x: 410, y: 260, rx: 42, ry: 34, rotate: -10 },
      "right-medullary-pyramid": { x: 396, y: 270, rx: 30, ry: 34, rotate: 0 },
      "right-medial-lemniscus-pons": { x: 390, y: 214, rx: 28, ry: 34, rotate: 0 },
      "left-lateral-medulla": { x: 250, y: 214, rx: 38, ry: 44, rotate: 14 },
      "right-spinal-trigeminal-nucleus": { x: 470, y: 204, rx: 36, ry: 38, rotate: -10 },
      "left-facial-nucleus": { x: 290, y: 164, rx: 34, ry: 24, rotate: 0 },
      "right-hypoglossal-corticobulbar": { x: 398, y: 250, rx: 30, ry: 38, rotate: 0 },
      "left-lateral-lemniscus": { x: 250, y: 182, rx: 36, ry: 38, rotate: 10 },
      "left-mlf": { x: 338, y: 150, rx: 20, ry: 38, rotate: 0 },
      "right-abducens-nucleus": { x: 430, y: 164, rx: 34, ry: 24, rotate: 0 },
      "right-lateral-medulla-sympathetic": { x: 470, y: 222, rx: 34, ry: 42, rotate: -12 },
      "dorsal-midbrain": { x: 360, y: 132, rx: 74, ry: 28, rotate: 0 },
      "right-nucleus-solitarius": { x: 430, y: 152, rx: 32, ry: 24, rotate: -8 },
      "pontine-blink-interneuron": { x: 360, y: 174, rx: 56, ry: 30, rotate: 0 },
    },
  },
  spinal: {
    classifications: {
      "brown-sequard": { x: 292, y: 184, rx: 68, ry: 108, rotate: 0 },
      "anterior-cord": { x: 360, y: 238, rx: 132, ry: 66, rotate: 0 },
      "central-cord": { x: 360, y: 182, rx: 46, ry: 44, rotate: 0 },
      "posterior-cord": { x: 360, y: 92, rx: 56, ry: 42, rotate: 0 },
      conus: { x: 360, y: 252, rx: 72, ry: 42, rotate: 0 },
      cauda: { x: 360, y: 286, rx: 100, ry: 24, rotate: 0 },
    },
    lesions: {
      "left-cervical-cord": { x: 292, y: 184, rx: 68, ry: 108, rotate: 0 },
      "left-t10-hemicord": { x: 292, y: 184, rx: 68, ry: 108, rotate: 0 },
      "left-dorsal-column-t8": { x: 335, y: 92, rx: 28, ry: 44, rotate: -8 },
      "anterior-white-commissure-t10": { x: 360, y: 182, rx: 34, ry: 26, rotate: 0 },
      "left-central-cord": { x: 360, y: 182, rx: 42, ry: 42, rotate: 0 },
      "left-anterolateral-t10": { x: 252, y: 242, rx: 40, ry: 44, rotate: -18 },
      "left-posterior-cord-plus-cst": { x: 292, y: 154, rx: 58, ry: 82, rotate: 0 },
      "left-dorsal-root": { x: 198, y: 178, rx: 36, ry: 24, rotate: -12 },
    },
  },
};

const state = {
  pathwayId: pathways[0].id,
  lesionId: "normal",
  classifierId: classificationSystems[0].id,
  classificationId: classificationSystems[0].items[0].id,
  crossSectionId: crossSections[0].id,
  theme: getStoredTheme(),
};

const els = {
  appShell: document.querySelector("#appShell"),
  root: document.documentElement,
  themeToggle: document.querySelector("#themeToggle"),
  themeText: document.querySelector("#themeText"),
  leftPanelToggle: document.querySelector("#leftPanelToggle"),
  leftPanelContent: document.querySelector("#leftPanelContent"),
  rightPanelToggle: document.querySelector("#rightPanelToggle"),
  rightPanelContent: document.querySelector("#rightPanelContent"),
  classifierTabs: document.querySelector("#classifierTabs"),
  classifierList: document.querySelector("#classifierList"),
  classifierCount: document.querySelector("#classifierCount"),
  crossSectionTabs: document.querySelector("#crossSectionTabs"),
  crossSectionCanvas: document.querySelector("#crossSectionCanvas"),
  crossSectionTitle: document.querySelector("#crossSectionTitle"),
  crossSectionSubtitle: document.querySelector("#crossSectionSubtitle"),
  crossSectionRule: document.querySelector("#crossSectionRule"),
  crossSectionStructures: document.querySelector("#crossSectionStructures"),
  pathwayList: document.querySelector("#pathwayList"),
  lesionList: document.querySelector("#lesionList"),
  pathwayCount: document.querySelector("#pathwayCount"),
  lesionCount: document.querySelector("#lesionCount"),
  signalState: document.querySelector("#signalState"),
  lateralityState: document.querySelector("#lateralityState"),
  complexityState: document.querySelector("#complexityState"),
  activeTitle: document.querySelector("#activeTitle"),
  mainCoronalLayer: document.querySelector("#mainCoronalLayer"),
  pathwayLayer: document.querySelector("#pathwayLayer"),
  classificationLayer: document.querySelector("#classificationLayer"),
  labelLayer: document.querySelector("#labelLayer"),
  originText: document.querySelector("#originText"),
  decussationText: document.querySelector("#decussationText"),
  ruleText: document.querySelector("#ruleText"),
  patternText: document.querySelector("#patternText"),
  findingTitle: document.querySelector("#findingTitle"),
  findingSummary: document.querySelector("#findingSummary"),
  motorDeficit: document.querySelector("#motorDeficit"),
  sensoryDeficit: document.querySelector("#sensoryDeficit"),
  reflexDeficit: document.querySelector("#reflexDeficit"),
  clinicalLaterality: document.querySelector("#clinicalLaterality"),
  networkDeficit: document.querySelector("#networkDeficit"),
  pitfallText: document.querySelector("#pitfallText"),
  reasoningCode: document.querySelector("#reasoningCode"),
  reasoningList: document.querySelector("#reasoningList"),
  localizationClue: document.querySelector("#localizationClue"),
  classificationCode: document.querySelector("#classificationCode"),
  classificationTitle: document.querySelector("#classificationTitle"),
  classificationSummary: document.querySelector("#classificationSummary"),
  classificationRegion: document.querySelector("#classificationRegion"),
  classificationSignature: document.querySelector("#classificationSignature"),
  classificationLocalization: document.querySelector("#classificationLocalization"),
  classificationPitfall: document.querySelector("#classificationPitfall"),
  classificationReasoning: document.querySelector("#classificationReasoning"),
};

function getStoredTheme() {
  try {
    return window.localStorage.getItem("neuro-theme") === "day" ? "day" : "night";
  } catch {
    return "night";
  }
}

function storeTheme(theme) {
  try {
    window.localStorage.setItem("neuro-theme", theme);
  } catch {
    // Local storage can be unavailable in restricted browser contexts.
  }
}

function applyTheme(theme) {
  state.theme = theme;
  els.root.dataset.theme = theme;
  els.themeToggle.setAttribute("aria-pressed", String(theme === "day"));
  els.themeToggle.setAttribute("aria-label", `Switch to ${theme === "day" ? "night" : "day"} mode`);
  setText(els.themeText, theme === "day" ? "Day" : "Night");
  storeTheme(theme);
}

els.themeToggle.addEventListener("click", () => {
  applyTheme(state.theme === "day" ? "night" : "day");
});

function applyPanelCollapse(side, collapsed) {
  const isLeft = side === "left";
  const datasetKey = isLeft ? "leftCollapsed" : "rightCollapsed";
  const button = isLeft ? els.leftPanelToggle : els.rightPanelToggle;
  const content = isLeft ? els.leftPanelContent : els.rightPanelContent;
  const expanded = !collapsed;

  els.appShell.dataset[datasetKey] = String(collapsed);
  button.setAttribute("aria-expanded", String(expanded));
  button.setAttribute("aria-label", `${collapsed ? "Expand" : "Collapse"} ${side} panel`);
  content.setAttribute("aria-hidden", String(collapsed));
  button.querySelector("span").textContent = isLeft === collapsed ? ">" : "<";
}

els.leftPanelToggle.addEventListener("click", () => {
  applyPanelCollapse("left", els.appShell.dataset.leftCollapsed !== "true");
});

els.rightPanelToggle.addEventListener("click", () => {
  applyPanelCollapse("right", els.appShell.dataset.rightCollapsed !== "true");
});

function applySectionCollapse(section, collapsed) {
  const button = section.querySelector(".section-toggle");
  const label = section.dataset.sectionLabel ?? "Section";
  const expanded = !collapsed;

  section.dataset.collapsed = String(collapsed);
  button.setAttribute("aria-expanded", String(expanded));
  button.setAttribute("aria-label", `${collapsed ? "Expand" : "Collapse"} ${label}`);
  button.title = `${collapsed ? "Expand" : "Collapse"} ${label}`;
}

function setupCollapsibleSections() {
  document.querySelectorAll("[data-collapsible-section]").forEach((section) => {
    const button = section.querySelector(".section-toggle");
    if (!button) return;

    applySectionCollapse(section, section.dataset.collapsed === "true");
    button.addEventListener("click", () => {
      applySectionCollapse(section, section.dataset.collapsed !== "true");
    });
  });
}

function getActivePathway() {
  return pathways.find((pathway) => pathway.id === state.pathwayId) ?? pathways[0];
}

function getActiveLesion(pathway = getActivePathway()) {
  if (state.lesionId === "normal") return getNormalState(pathway);
  return pathway.lesions.find((lesion) => lesion.id === state.lesionId) ?? getNormalState(pathway);
}

function getActiveClassificationSystem() {
  return classificationSystems.find((system) => system.id === state.classifierId) ?? classificationSystems[0];
}

function getActiveClassification(system = getActiveClassificationSystem()) {
  return system.items.find((item) => item.id === state.classificationId) ?? system.items[0];
}

function getActiveCrossSection() {
  return crossSections.find((section) => section.id === state.crossSectionId) ?? crossSections[0];
}

function getLesionGroup(lesion, pathway) {
  return getLesionGroupById(getLesionCategoryLink(lesion, pathway).groupId);
}

function getLesionCategoryLink(lesion, pathway) {
  if (lesion.isNormal) {
    return { groupId: "baseline" };
  }
  return lesionCategoryLinks[lesion.id] ?? inferLesionCategoryLink(lesion, pathway);
}

function inferLesionCategoryLink(lesion, pathway) {
  const id = lesion.id;
  if (pathway.id === "language-network" || id.includes("auditory-cortex") || id.includes("occipital-cortex")) {
    return { groupId: "cortical", classifierId: "brodmann", classificationId: "ba4" };
  }
  if (
    id.includes("internal-capsule") ||
    id.includes("genu") ||
    id.includes("vpl") ||
    id.includes("vpm") ||
    id.includes("thalamus")
  ) {
    return { groupId: "subcortical", classifierId: "subcortical", classificationId: "thalamus-class" };
  }
  if (
    id.includes("peduncle") ||
    id.includes("medulla") ||
    id.includes("pons") ||
    id.includes("mlf") ||
    id.includes("abducens") ||
    id.includes("facial-nucleus") ||
    id.includes("hypoglossal") ||
    id.includes("lateral-lemniscus") ||
    id.includes("trigeminal-nucleus")
  ) {
    return { groupId: "brainstem", classifierId: "brainstem", classificationId: "lateral-medulla" };
  }
  if (pathway.id === "oculosympathetic" || id.includes("sympathetic") || id.includes("carotid-plexus")) {
    return { groupId: "autonomic", classifierId: "autonomic", classificationId: "central-horner-class" };
  }
  if (
    id.includes("cord") ||
    id.includes("root") ||
    id.includes("t8") ||
    id.includes("t10") ||
    id.includes("hemicord") ||
    id.includes("commissure") ||
    id.includes("pancoast")
  ) {
    if (id.includes("root")) {
      return { groupId: "cranial-peripheral", classifierId: "cranial-peripheral", classificationId: "root-class" };
    }
    return { groupId: "spinal", classifierId: "spinal", classificationId: "brown-sequard" };
  }
  if (
    pathway.id === "visual" ||
    pathway.id === "pupillary-light" ||
    id.includes("optic") ||
    id.includes("chiasm") ||
    id.includes("radiation") ||
    id.includes("cn-iii")
  ) {
    return { groupId: "visual-ocular", classifierId: "visual-ocular", classificationId: "pupil-class" };
  }
  if (
    id.includes("ganglion") ||
    id.includes("nerve") ||
    id.includes("cochlear") ||
    id.includes("vestibular")
  ) {
    return { groupId: "cranial-peripheral", classifierId: "cranial-peripheral", classificationId: "root-class" };
  }
  if (pathway.id === "cerebellar-loop" || id.includes("cerebellar") || id.includes("vermis")) {
    return { groupId: "cerebellar", classifierId: "cerebellar", classificationId: "cerebellar-hemisphere-class" };
  }
  return { groupId: "subcortical", classifierId: "subcortical", classificationId: "internal-capsule-class" };
}

function getLesionGroupById(id) {
  return lesionGroups.find((group) => group.id === id) ?? lesionGroups[0];
}

function getClassificationSystemById(id) {
  return classificationSystems.find((system) => system.id === id);
}

function syncClassificationToLesion(lesion, pathway) {
  const link = getLesionCategoryLink(lesion, pathway);
  if (!link.classifierId || !link.classificationId) return;

  const system = getClassificationSystemById(link.classifierId);
  const classification = system?.items.find((item) => item.id === link.classificationId);
  if (!system || !classification) return;

  state.classifierId = system.id;
  state.classificationId = classification.id;
}

function syncCrossSectionToLesion(lesion, pathway) {
  if (lesion.isNormal) return;

  const directSectionId = getCrossSectionIdForLesion(lesion.id);
  if (directSectionId) {
    state.crossSectionId = directSectionId;
    return;
  }

  const link = getLesionCategoryLink(lesion, pathway);
  if (link.groupId === "brainstem" || link.groupId === "spinal") {
    state.crossSectionId = link.groupId;
    return;
  }
  if (link.classifierId === "brainstem" || link.classifierId === "spinal") {
    state.crossSectionId = link.classifierId;
  }
}

function getCrossSectionIdForLesion(lesionId) {
  return Object.entries(crossSectionLesionTargets).find(([, targets]) => targets.lesions[lesionId])?.[0];
}

function syncCrossSectionToClassification(system) {
  if (system.id === "brainstem" || system.id === "spinal") {
    state.crossSectionId = system.id;
  }
}

function getNormalState(pathway) {
  return {
    id: "normal",
    code: `${pathway.id.toUpperCase().slice(0, 4)}-00`,
    name: "No lesion / normal",
    short: "Intact reference pathway",
    isNormal: true,
    affectedSegments: [],
    signal: "Intact",
    laterality: "No deficit",
    findingTitle: `Normal ${pathway.name.toLowerCase()} function`,
    summary: pathway.normal.summary,
    motor: pathway.normal.motor,
    sensory: pathway.normal.sensory,
    reflexes: pathway.normal.reflexes,
    clinicalLaterality: pathway.normal.laterality,
    pattern: pathway.normal.pattern ?? pathway.rule,
    network: pathway.normal.network ?? pathway.type,
    pitfall: pathway.normal.pitfall ?? "Compare the intact baseline before interpreting a lesion state.",
    clue: pathway.normal.clue,
    reasoning: pathway.normal.reasoning,
  };
}

function svgNode(tagName, attributes = {}) {
  const node = document.createElementNS("http://www.w3.org/2000/svg", tagName);
  Object.entries(attributes).forEach(([key, value]) => {
    node.setAttribute(key, value);
  });
  return node;
}

function setText(element, text) {
  element.textContent = text;
}

function formatCount(number) {
  return String(number).padStart(2, "0");
}

function renderClassifierTabs(system) {
  els.classifierTabs.replaceChildren(
    ...classificationSystems.map((item) => {
      const button = document.createElement("button");
      button.className = "classifier-tab";
      button.type = "button";
      button.role = "tab";
      button.style.setProperty("--class-color", item.color);
      button.setAttribute("aria-selected", String(item.id === system.id));
      button.textContent = item.name;
      button.addEventListener("click", () => {
        state.classifierId = item.id;
        state.classificationId = item.items[0].id;
        syncCrossSectionToClassification(item);
        renderClassification();
        renderCrossSection();
      });
      return button;
    }),
  );
}

function renderClassifierList(system, classification) {
  els.classifierList.replaceChildren(
    ...system.items.map((item) => {
      const button = document.createElement("button");
      button.className = "classifier-button";
      button.type = "button";
      button.style.setProperty("--class-color", system.color);
      button.setAttribute("aria-pressed", String(item.id === classification.id));
      button.addEventListener("click", () => {
        state.classificationId = item.id;
        syncCrossSectionToClassification(system);
        renderClassification();
        renderCrossSection();
      });

      const copy = document.createElement("span");
      copy.className = "classifier-copy";
      copy.innerHTML = `<strong>${item.name}</strong><span>${item.short}</span>`;
      button.append(copy);
      return button;
    }),
  );
  setText(els.classifierCount, formatCount(system.items.length));
}

function renderPathwayButtons() {
  els.pathwayList.replaceChildren(
    ...pathways.map((pathway) => {
      const button = document.createElement("button");
      button.className = "pathway-button";
      button.type = "button";
      button.style.setProperty("--path-color", pathway.color);
      button.setAttribute("aria-pressed", String(pathway.id === state.pathwayId));
      button.addEventListener("click", () => {
        state.pathwayId = pathway.id;
        state.lesionId = "normal";
        render();
      });

      const accent = document.createElement("span");
      accent.className = "pathway-accent";

      const copy = document.createElement("span");
      copy.className = "pathway-copy";
      copy.innerHTML = `<strong>${pathway.name}</strong><span>${pathway.description}</span><span class="pathway-meta"><b>${pathway.type}</b><b>${pathway.complexity ?? "Foundational"}</b></span>`;

      button.append(accent, copy);
      return button;
    }),
  );
  setText(els.pathwayCount, formatCount(pathways.length));
}

function renderCrossSection() {
  const section = getActiveCrossSection();
  renderCrossSectionTabs(section);
  setText(els.crossSectionTitle, section.title);
  setText(els.crossSectionSubtitle, section.subtitle);
  setText(els.crossSectionRule, section.rule);
  els.crossSectionStructures.replaceChildren(
    ...section.structures.map((structure) => {
      const item = document.createElement("li");
      item.textContent = structure;
      return item;
    }),
  );

  els.crossSectionCanvas.replaceChildren();
  if (section.id === "brainstem") renderBrainstemCrossSection();
  if (section.id === "spinal") renderSpinalCrossSection();
  renderCrossSectionLesion(section);
}

function renderCrossSectionTabs(activeSection) {
  els.crossSectionTabs.replaceChildren(
    ...crossSections.map((section) => {
      const button = document.createElement("button");
      button.className = "cross-section-tab";
      button.type = "button";
      button.role = "tab";
      button.setAttribute("aria-selected", String(section.id === activeSection.id));
      button.textContent = section.name;
      button.addEventListener("click", () => {
        state.crossSectionId = section.id;
        renderCrossSection();
      });
      return button;
    }),
  );
}

function appendCrossShape(tagName, attributes = {}, target = els.crossSectionCanvas) {
  const node = svgNode(tagName, attributes);
  target.append(node);
  return node;
}

function appendCrossLabel(text, x, y, className = "cross-label", target = els.crossSectionCanvas) {
  const label = svgNode("text", { class: className, x, y });
  label.textContent = text;
  target.append(label);
  return label;
}

function renderMainCoronalInset() {
  const title = svgNode("text", {
    class: "main-coronal-title",
    x: 166,
    y: 420,
  });
  title.textContent = "Brain coronal slice";

  const group = svgNode("g", {
    class: "main-coronal-inset",
    transform: "translate(112 422) scale(0.56)",
  });
  group.append(svgNode("rect", { class: "main-coronal-frame", x: 92, y: 24, width: 536, height: 314, rx: 16 }));
  renderCoronalSlice(group);
  els.mainCoronalLayer.replaceChildren(title, group);
}

function renderCoronalSlice(target) {
  appendCrossShape("ellipse", { class: "cross-outline", cx: 360, cy: 178, rx: 260, ry: 142 }, target);
  appendCrossShape("path", {
    class: "cross-region cortex-region",
    d: "M116 174 C122 92 215 42 360 42 C505 42 598 92 604 174 C608 264 516 316 360 316 C204 316 112 264 116 174 Z M162 174 C168 116 238 82 360 82 C482 82 552 116 558 174 C562 238 490 276 360 276 C230 276 158 238 162 174 Z",
  }, target);
  appendCrossShape("path", {
    class: "cross-region ventricle-region",
    d: "M318 126 C344 118 352 142 342 174 C334 196 326 214 336 236 C300 222 286 196 292 168 C296 146 302 132 318 126 Z",
  }, target);
  appendCrossShape("path", {
    class: "cross-region ventricle-region",
    d: "M402 126 C376 118 368 142 378 174 C386 196 394 214 384 236 C420 222 434 196 428 168 C424 146 418 132 402 126 Z",
  }, target);
  appendCrossShape("ellipse", { class: "cross-region thalamus-region", cx: 318, cy: 205, rx: 38, ry: 30 }, target);
  appendCrossShape("ellipse", { class: "cross-region thalamus-region", cx: 402, cy: 205, rx: 38, ry: 30 }, target);
  appendCrossShape("ellipse", { class: "cross-region basal-region", cx: 252, cy: 168, rx: 48, ry: 34, transform: "rotate(-18 252 168)" }, target);
  appendCrossShape("ellipse", { class: "cross-region basal-region", cx: 468, cy: 168, rx: 48, ry: 34, transform: "rotate(18 468 168)" }, target);
  appendCrossShape("path", { class: "cross-tract", d: "M292 138 C278 174 280 214 306 250" }, target);
  appendCrossShape("path", { class: "cross-tract", d: "M428 138 C442 174 440 214 414 250" }, target);
  appendCrossShape("path", { class: "cross-midline", d: "M360 52 V308" }, target);
  appendCrossLabel("Cortex", 126, 88, "cross-label", target);
  appendCrossLabel("Basal ganglia", 478, 142, "cross-label", target);
  appendCrossLabel("Internal capsule", 436, 256, "cross-label", target);
  appendCrossLabel("Thalamus", 396, 218, "cross-label", target);
  appendCrossLabel("L ventricle", 240, 126, "cross-label muted-cross-label", target);
}

function renderBrainstemCrossSection() {
  appendCrossShape("path", {
    class: "cross-outline",
    d: "M154 188 C154 108 232 60 360 60 C488 60 566 108 566 188 C566 270 486 316 360 316 C234 316 154 270 154 188 Z",
  });
  appendCrossShape("path", { class: "cross-region ventricle-region", d: "M260 102 C300 78 420 78 460 102 C430 132 290 132 260 102 Z" });
  appendCrossShape("path", { class: "cross-region tegmentum-region", d: "M208 136 C260 112 460 112 512 136 C516 204 468 246 360 246 C252 246 204 204 208 136 Z" });
  appendCrossShape("path", { class: "cross-region basis-region", d: "M220 242 C282 214 438 214 500 242 C474 292 420 312 360 312 C300 312 246 292 220 242 Z" });
  appendCrossShape("ellipse", { class: "cross-region nucleus-region", cx: 290, cy: 164, rx: 34, ry: 22 });
  appendCrossShape("ellipse", { class: "cross-region nucleus-region", cx: 430, cy: 164, rx: 34, ry: 22 });
  appendCrossShape("path", { class: "cross-tract", d: "M330 224 C330 252 328 276 322 298" });
  appendCrossShape("path", { class: "cross-tract", d: "M390 224 C390 252 392 276 398 298" });
  appendCrossShape("path", { class: "cross-tract sensory-tract", d: "M250 172 C224 194 208 222 204 258" });
  appendCrossShape("path", { class: "cross-tract sensory-tract", d: "M470 172 C496 194 512 222 516 258" });
  appendCrossShape("path", { class: "cross-midline", d: "M360 74 V314" });
  appendCrossLabel("4th ventricle", 454, 96);
  appendCrossLabel("Tegmentum", 236, 138);
  appendCrossLabel("CN nuclei", 430, 168);
  appendCrossLabel("CST / basis", 400, 290);
  appendCrossLabel("STT / trigeminal", 92, 242);
  appendCrossLabel("MLF", 370, 142, "cross-label muted-cross-label");
}

function renderSpinalCrossSection() {
  appendCrossShape("ellipse", { class: "cross-outline", cx: 360, cy: 182, rx: 172, ry: 136 });
  appendCrossShape("path", {
    class: "cross-region dorsal-column-region",
    d: "M310 62 C334 48 386 48 410 62 L388 144 C374 136 346 136 332 144 Z",
  });
  appendCrossShape("path", {
    class: "cross-region gray-region",
    d: "M360 130 C326 88 292 112 318 168 C286 178 278 230 326 222 C338 250 382 250 394 222 C442 230 434 178 402 168 C428 112 394 88 360 130 Z",
  });
  appendCrossShape("path", { class: "cross-region cst-region", d: "M246 170 C238 214 260 256 300 278 C286 226 292 188 318 156 C288 148 264 152 246 170 Z" });
  appendCrossShape("path", { class: "cross-region cst-region", d: "M474 170 C482 214 460 256 420 278 C434 226 428 188 402 156 C432 148 456 152 474 170 Z" });
  appendCrossShape("path", { class: "cross-region spinothalamic-region", d: "M230 220 C252 274 302 304 360 304 C302 284 268 242 264 196 Z" });
  appendCrossShape("path", { class: "cross-region spinothalamic-region", d: "M490 220 C468 274 418 304 360 304 C418 284 452 242 456 196 Z" });
  appendCrossShape("path", { class: "cross-midline", d: "M360 48 V316" });
  appendCrossShape("path", { class: "cross-commissure", d: "M306 182 H414" });
  appendCrossLabel("Dorsal columns", 400, 66);
  appendCrossLabel("Lateral CST", 454, 260);
  appendCrossLabel("Spinothalamic", 448, 306);
  appendCrossLabel("Gray matter / horn", 188, 178);
  appendCrossLabel("Anterior white commissure", 386, 186, "cross-label muted-cross-label");
}

function renderCrossSectionLesion(section) {
  const focus = getCrossSectionFocus(section);
  if (!focus) return;

  const { x, y, rx, ry, rotate = 0 } = focus;
  const group = svgNode("g", { class: "cross-lesion-focus" });
  const zoneAttributes = {
    class: "cross-lesion-zone",
    cx: x,
    cy: y,
    rx,
    ry,
  };
  if (rotate) {
    zoneAttributes.transform = `rotate(${rotate} ${x} ${y})`;
  }

  const labelText = `${focus.kind === "lesion" ? "Lesion" : "Class"} / ${focus.code}`;
  const estimatedLabelWidth = labelText.length * 7.6;
  const canPlaceRight = x + rx + 18 + estimatedLabelWidth <= 632;
  const canPlaceLeft = x - rx - 18 - estimatedLabelWidth >= 92;
  const labelGoesLeft = !canPlaceRight && canPlaceLeft;
  const labelX = labelGoesLeft
    ? x - rx - 18
    : Math.min(x + rx + 18, 632 - estimatedLabelWidth);
  const labelY = Math.max(y - ry - 12, 62);
  const leaderX = labelGoesLeft ? labelX + 8 : labelX - 8;

  group.append(
    svgNode("ellipse", zoneAttributes),
    svgNode("circle", {
      class: "cross-lesion-core",
      cx: x,
      cy: y,
      r: 7,
    }),
    svgNode("path", {
      class: "cross-lesion-break",
      d: `M${x - 13} ${y - 4} L${x - 4} ${y - 13} M${x + 4} ${y + 13} L${x + 14} ${y + 3}`,
    }),
    svgNode("path", {
      class: "cross-lesion-leader",
      d: `M${x} ${y} L${leaderX} ${labelY - 5}`,
    }),
  );

  const label = svgNode("text", {
    class: "cross-lesion-label",
    x: labelX,
    y: labelY,
    "text-anchor": labelGoesLeft ? "end" : "start",
  });
  label.textContent = labelText;
  group.append(label);
  els.crossSectionCanvas.append(group);
}

function getCrossSectionFocus(section) {
  const targets = crossSectionLesionTargets[section.id];
  if (!targets) return null;

  const pathway = getActivePathway();
  const lesion = getActiveLesion(pathway);
  if (!lesion.isNormal) {
    const directTarget = targets.lesions[lesion.id];
    if (directTarget) {
      return { ...directTarget, code: lesion.code, label: lesion.name, kind: "lesion" };
    }

    const link = getLesionCategoryLink(lesion, pathway);
    const classificationTarget = targets.classifications[link.classificationId];
    if ((link.groupId === section.id || link.classifierId === section.id) && classificationTarget) {
      return { ...classificationTarget, code: lesion.code, label: lesion.name, kind: "lesion" };
    }
  }

  const system = getActiveClassificationSystem();
  const classification = getActiveClassification(system);
  if (system.id === section.id) {
    const classificationTarget = targets.classifications[classification.id];
    if (classificationTarget) {
      return { ...classificationTarget, code: classification.code, label: classification.name, kind: "classification" };
    }
  }

  return null;
}

function renderClassification() {
  const system = getActiveClassificationSystem();
  const classification = getActiveClassification(system);
  state.classificationId = classification.id;
  els.root.style.setProperty("--class-color", system.color);
  renderClassifierTabs(system);
  renderClassifierList(system, classification);
  renderClassificationOverlay(system, classification);
  renderClassificationPanel(classification);
}

function renderClassificationOverlay(system, classification) {
  const overlay = classification.overlay;
  const group = svgNode("g", { class: "classification-overlay" });
  if (!overlay) {
    els.classificationLayer.replaceChildren(group);
    return;
  }

  if (overlay.type === "ellipse") {
    const attributes = {
      class: "classification-region",
      cx: overlay.cx,
      cy: overlay.cy,
      rx: overlay.rx,
      ry: overlay.ry,
    };
    if (overlay.rotate) {
      attributes.transform = `rotate(${overlay.rotate} ${overlay.cx} ${overlay.cy})`;
    }
    group.append(svgNode("ellipse", attributes));
  }

  if (overlay.type === "path") {
    group.append(
      svgNode("path", {
        class: "classification-region",
        d: overlay.d,
      }),
    );
  }

  const labelText = `${system.short} / ${classification.code}`;
  const estimatedLabelWidth = labelText.length * 8;
  const labelGoesLeft = overlay.cx + overlay.rx + 22 + estimatedLabelWidth > 870;
  const labelX = labelGoesLeft
    ? Math.max(overlay.cx - overlay.rx - 22, 140)
    : Math.min(overlay.cx + overlay.rx + 22, 840);
  const labelY = Math.max(overlay.cy - overlay.ry - 12, 74);
  group.append(
    svgNode("path", {
      class: "classification-label-line",
      d: `M${overlay.cx} ${overlay.cy} L${labelGoesLeft ? labelX + 10 : labelX - 10} ${labelY - 5}`,
    }),
  );
  const label = svgNode("text", {
    class: "classification-label",
    x: labelX,
    y: labelY,
    "text-anchor": labelGoesLeft ? "end" : "start",
  });
  label.textContent = labelText;
  group.append(label);
  els.classificationLayer.replaceChildren(group);
}

function renderClassificationPanel(classification) {
  setText(els.classificationCode, classification.code);
  setText(els.classificationTitle, classification.name);
  setText(els.classificationSummary, classification.summary);
  setText(els.classificationRegion, classification.region);
  setText(els.classificationSignature, classification.signature);
  setText(els.classificationLocalization, classification.localization);
  setText(els.classificationPitfall, classification.pitfall);
  els.classificationReasoning.replaceChildren(
    ...classification.reasoning.map((step) => {
      const item = document.createElement("li");
      item.textContent = step;
      return item;
    }),
  );
}

function renderLesionButtons(pathway, lesion) {
  const lesionOptions = [getNormalState(pathway), ...pathway.lesions];
  const nodes = [];

  lesionGroups.forEach((group) => {
    const groupItems = lesionOptions.filter((item) => getLesionGroup(item, pathway).id === group.id);
    if (!groupItems.length) return;

    const heading = document.createElement("div");
    heading.className = "lesion-group-heading";
    heading.style.setProperty("--group-color", group.color);
    heading.innerHTML = `<span class="lesion-group-copy"><strong>${group.name}</strong><small>${group.short}</small></span><b>${formatCount(groupItems.length)}</b>`;
    nodes.push(heading);

    groupItems.forEach((item) => {
      const itemGroup = getLesionGroup(item, pathway);
      const button = document.createElement("button");
      button.className = "lesion-button";
      button.type = "button";
      button.style.setProperty("--path-color", pathway.color);
      button.style.setProperty("--group-color", itemGroup.color);
      button.setAttribute("aria-pressed", String(item.id === lesion.id));
      button.setAttribute("title", `${item.name} category: ${itemGroup.name}`);
      button.addEventListener("click", () => {
        state.lesionId = item.id;
        syncClassificationToLesion(item, pathway);
        render();
      });

      const copy = document.createElement("span");
      copy.className = "lesion-copy";
      copy.innerHTML = `<span class="lesion-title-row"><strong>${item.name}</strong><b>${itemGroup.name}</b></span><span>${item.short}</span>`;
      button.append(copy);
      nodes.push(button);
    });
  });

  els.lesionList.replaceChildren(...nodes);
  setText(els.lesionCount, formatCount(lesionOptions.length));
}

function renderCanvas(pathway, lesion) {
  const affected = new Set(lesion.affectedSegments);
  const shadows = svgNode("g");
  const segments = svgNode("g");

  pathway.segments.forEach((segment) => {
    shadows.append(
      svgNode("path", {
        class: "tract-shadow",
        d: segment.d,
      }),
    );
  });

  pathway.segments.forEach((segment) => {
    const path = svgNode("path", {
      class: `tract-segment ${affected.has(segment.id) ? "downstream" : "upstream"}`,
      d: segment.d,
    });
    segments.append(path);
  });

  const canvasNodes = [shadows, segments, renderDecussation(pathway)];
  if (!lesion.isNormal) canvasNodes.push(renderLesion(lesion));
  els.pathwayLayer.replaceChildren(...canvasNodes);
  els.labelLayer.replaceChildren(renderLabels(pathway, lesion));
}

function renderDecussation(pathway) {
  const group = svgNode("g");
  if (!pathway.decussationPoint) return group;

  const { x, y } = pathway.decussationPoint;
  group.append(
    svgNode("circle", {
      class: "decussation-marker",
      cx: x,
      cy: y,
      r: 18,
    }),
    svgNode("path", {
      class: "decussation-marker",
      d: `M${x - 11} ${y - 11} L${x + 11} ${y + 11} M${x + 11} ${y - 11} L${x - 11} ${y + 11}`,
    }),
  );
  return group;
}

function renderLesion(lesion) {
  if (!lesion.coord) return svgNode("g");
  const { x, y } = lesion.coord;
  const group = svgNode("g");
  group.append(
    svgNode("circle", {
      class: "lesion-ring",
      cx: x,
      cy: y,
      r: 22,
    }),
    svgNode("circle", {
      class: "lesion-core",
      cx: x,
      cy: y,
      r: 7,
    }),
    svgNode("path", {
      class: "break-mark",
      d: `M${x - 13} ${y - 3} L${x - 3} ${y - 14} M${x + 2} ${y + 13} L${x + 14} ${y + 1}`,
    }),
  );
  return group;
}

function renderLabels(pathway, lesion) {
  const group = svgNode("g");
  Object.entries(pathway.labels).forEach(([key, label]) => {
    if (key === "decussation" && lesion.coord && isNearPoint(label, lesion.coord, 42)) return;
    group.append(renderLabel(label.text, label.x, label.y, label.lx, label.ly, "small-label"));
  });
  if (lesion.coord) {
    group.append(renderLabel(lesion.name, lesion.coord.x + 28, lesion.coord.y - 28, lesion.coord.x, lesion.coord.y, "node-label"));
  }
  return group;
}

function isNearPoint(label, point, threshold) {
  const dx = label.lx - point.x;
  const dy = label.ly - point.y;
  return Math.hypot(dx, dy) <= threshold;
}

function renderLabel(text, x, y, lineX, lineY, className) {
  const group = svgNode("g", { class: className });
  group.append(
    svgNode("path", {
      class: "label-line",
      d: `M${lineX} ${lineY} L${x - 8} ${y - 5}`,
    }),
  );
  const label = svgNode("text", {
    x,
    y,
  });
  label.textContent = text;
  group.append(label);
  return group;
}

function renderClinical(pathway, lesion) {
  setText(els.signalState, lesion.signal);
  setText(els.lateralityState, lesion.laterality);
  setText(els.complexityState, pathway.complexity ?? "Foundational");
  setText(els.activeTitle, pathway.name);
  setText(els.originText, pathway.origin);
  setText(els.decussationText, pathway.decussation);
  setText(els.ruleText, pathway.rule);
  setText(els.patternText, lesion.pattern ?? pathway.pattern ?? pathway.rule);
  setText(els.findingTitle, lesion.findingTitle);
  setText(els.findingSummary, lesion.summary);
  setText(els.motorDeficit, lesion.motor);
  setText(els.sensoryDeficit, lesion.sensory);
  setText(els.reflexDeficit, lesion.reflexes);
  setText(els.clinicalLaterality, lesion.clinicalLaterality);
  setText(els.networkDeficit, lesion.network ?? pathway.network ?? pathway.type);
  setText(els.pitfallText, lesion.pitfall ?? pathway.pitfall ?? "Check crossing level before deciding ipsilateral versus contralateral.");
  setText(els.reasoningCode, lesion.code);
  setText(els.localizationClue, lesion.clue);

  els.reasoningList.replaceChildren(
    ...lesion.reasoning.map((step) => {
      const item = document.createElement("li");
      item.textContent = step;
      return item;
    }),
  );
}

function render() {
  const pathway = getActivePathway();
  const lesion = getActiveLesion(pathway);
  state.lesionId = lesion.id;
  els.root.style.setProperty("--path-color", pathway.color);
  renderPathwayButtons();
  renderLesionButtons(pathway, lesion);
  renderMainCoronalInset();
  renderCanvas(pathway, lesion);
  syncCrossSectionToLesion(lesion, pathway);
  renderClassification();
  renderCrossSection();
  renderClinical(pathway, lesion);
}

applyTheme(state.theme);
applyPanelCollapse("left", false);
applyPanelCollapse("right", false);
setupCollapsibleSections();
render();
