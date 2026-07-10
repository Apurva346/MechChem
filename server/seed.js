

const mongoose = require('mongoose');
const Machine = require('./models/Machine'); // Path tumchya model pramane check kara

const MONGO_URI = "mongodb+srv://apurvajibhakate007_db_user:YXS8g9XndPuuK8IP@cluster0.dpnwsey.mongodb.net/mechchem_db?appName=Cluster0";

// --- CATEGORY DESCRIPTIONS ---
const millingDesc = `A milling machine is a versatile and essential machine tool used for removing material from a workpiece using rotary cutters. At Mech Chem Engineering Services, we offer reliable milling machines designed for accuracy, durability, and high productivity, making them suitable for workshops, tool rooms, and industrial manufacturing units.`;

const workholdingDesc = `Our premium selection of Workholding Tools provides the ultimate foundation for turning, boring, and milling operations, ensuring maximum machining accuracy, part stability, and operator safety. Engineered for high performance on both CNC turning centers and manual lathes, our range features highly precise Self-Centering Lathe Chucks and heavy-duty 4-Jaw Independent Chucks. Built from premium-grade forged steel and hardened alloy components, these tools minimize setup times, eliminate part deflection, and deliver the tightest runout tolerances required for demanding engineering tasks.`;
const finishingCoatingDesc = `Our comprehensive selection of Finishing & Coating Machines provides advanced surface treatment and protection solutions, ensuring your components achieve a flawless aesthetic appeal, high wear resistance, and long-lasting corrosion protection. Designed to cater to everything from large industrial production lines to specialized workshops, our range features high-efficiency Electrostatic Powder Coating Systems and rugged, high-speed Bench Polishing Machines. Built to international engineering standards, these systems maximize coating transfer efficiency, minimize downtime, and deliver mirror-smooth finishes across diverse metallic and structural substrates.`;
const bandsawDesc = `Our Bandsaw Machines are designed for accurate, efficient, and heavy-duty metal cutting applications across various industries. Built with robust construction and advanced hydraulic systems, these machines deliver smooth cutting performance, high productivity, and long operational life. Suitable for cutting round bars, square sections, pipes, and structural materials, the machines ensure precise cutting accuracy with low vibration and reliable operation. Available in automatic and semi automatic models, our bandsaw machines are ideal for fabrication units, engineering workshops, steel industries, and manufacturing plants. We supply high-quality industrial Bandsaw Machines in Nagpur, Maharashtra, providing dependable metal cutting solutions for customers across India.`;

const drillingDesc = `Mech Chem Engineering Services is a trusted Drill Machine and Workshop Machinery Supplier in Nagpur, offering a wide range of high-performance industrial drilling machines designed for precision, durability, and reliable operation. Our machines are widely used in fabrication workshops, manufacturing plants, engineering industries, and maintenance departments.`;
const grindingDesc = `Mech Chem Engineering Services supplies a versatile range of grinding machines designed for precision and durability. From flat surface finishing to shaft grinding and cutting tool sharpening, our machines deliver tight tolerances and superior surface finish for toolrooms, production shops, and engineering industries.`;
// --- MILLING MACHINES DATA ---
const millingMachines = [
    {
        name: "Heavy Duty Milling Machine",
        category: "Milling Machines",
        categoryDescription: millingDesc,
        subTitle: "Robust Milling Equipment for Heavy Metal Cutting and Fabrication Work",
        shortDescription: "Built for large-scale machining and heavy metal cutting operations in demanding industrial environments.",
        description: "The Heavy Duty Milling Machine is built for large-scale machining and heavy metal cutting operations. It is designed to handle high workloads and demanding industrial environments. Mech Chem Engineering Services supplies robust heavy-duty milling machines suitable for engineering industries, steel fabrication units, and manufacturing plants requiring reliable machining equipment.",
        specifications: {
            "Table Size": "300 × 1400 mm",
            "Longitudinal Travel": "900 – 1000 mm",
            "Cross Travel": "300 – 350 mm",
            "Vertical Travel": "400 – 450 mm",
            "Spindle Speed Range": "30 – 1500 RPM",
            "Motor Power": "5 – 7.5 HP"
        },
        features: ["Heavy-duty machine construction", "High load capacity", "Stable machining performance", "Precision cutting capability", "Long operational life"],
        applications: ["Heavy engineering industries", "Manufacturing plants", "Steel fabrication units", "Automobile industries"],
        faqs: [
            { question: "What is a heavy duty milling machine used for?", answer: "It is used for large machining jobs and heavy metal cutting operations." },
            { question: "Is this machine suitable for continuous industrial use?", answer: "Yes, it is designed for long working hours and heavy workloads." }
        ],
        ctaText: "Searching for a powerful machining setup? Get in touch with our specialists to discuss capacity and delivery timelines.",
        image: "/images/machines/heavy-duty-milling-machine.png",
        altText: "heavy-duty-milling-machine",
        metaTitle: "Heavy Duty Milling Machine Dealer in Nagpur | Industrial Milling Equipment",
        metaDescription: "Trusted heavy duty milling machine supplier in Nagpur offering robust machines for heavy machining and industrial manufacturing."
    },
    {
        name: "Turret Milling Machine",
        category: "Milling Machines",
        categoryDescription: millingDesc,
        subTitle: "Flexible Milling System for Accurate Component Manufacturing",
        shortDescription: "A highly flexible machine designed for precision milling, drilling, and shaping operations.",
        description: "The Turret Milling Machine is a highly flexible machine designed for precision milling, drilling, and shaping operations. It is widely used in tool rooms and manufacturing units for producing complex components with high accuracy. Mech Chem Engineering Services supplies reliable turret milling machines.",
        specifications: {
            "Table Size": "250 × 1250 mm",
            "Longitudinal Travel": "700 – 800 mm",
            "Cross Travel": "300 – 350 mm",
            "Spindle Speed Range": "60 – 2000 RPM",
            "Motor Power": "3 – 5 HP"
        },
        features: ["Swiveling turret head", "High machining flexibility", "Precision spindle operation", "Smooth performance"],
        applications: ["Tool rooms", "Manufacturing industries", "Precision engineering units"],
        faqs: [
            { question: "What is the advantage of a turret milling machine?", answer: "It provides flexibility for precision machining and multi-directional operations." }
        ],
        ctaText: "Upgrade your workshop with a flexible milling solution. Contact us today for professional support.",
        image: "/images/machines/turret-milling-machine.png",
        altText: "turret-milling-machine",
        metaTitle: "Turret Milling Machine Dealer in Nagpur | Precision Milling Machine",
        metaDescription: "Dependable supplier of turret milling systems in Nagpur delivering accurate machining performance."
    },
    {
        name: "Universal Milling Machine",
        category: "Milling Machines",
        categoryDescription: millingDesc,
        subTitle: "Versatile Milling Equipment Supplier for Tool Rooms",
        shortDescription: "Versatile metalworking machine designed for performing milling operations in multiple directions.",
        description: "The Universal Milling Machine is a versatile metalworking machine designed for performing milling operations in multiple directions. It is widely used for precision machining, gear cutting, and slotting.",
        specifications: {
            "Table Size": "254 × 1270 mm",
            "Longitudinal Travel": "700 – 800 mm",
            "Spindle Speed Range": "40 – 1800 RPM",
            "Motor Power": "3 – 5 HP"
        },
        features: ["Multi-directional capability", "Rigid structure", "Reliable machining accuracy"],
        applications: ["Tool rooms", "Manufacturing industries", "Engineering workshops"],
        faqs: [
            { question: "What is a universal milling machine used for?", answer: "It is used for milling, drilling, slotting, and gear cutting operations." }
        ],
        ctaText: "Get in touch with us to explore how our universal milling machines can enhance your production efficiency.",
        image: "/images/machines/universal-milling-machine.png",
        altText: "industrial-milling-machine-nagpur"
    },
    {
        name: "Vertical Milling Machine",
        category: "Milling Machines",
        categoryDescription: millingDesc,
        subTitle: "Precision Milling and Vertical Machining Center Equipment",
        shortDescription: "Designed for precision milling, drilling, and slotting operations.",
        description: "The Vertical Milling Machine is designed for precision milling, drilling, and slotting operations in metalworking industries. It ensures consistent machining performance and long operational life.",
        specifications: {
            "Table Size": "230 × 1000 mm",
            "Longitudinal Travel": "600 – 700 mm",
            "Spindle Speed Range": "50 – 2000 RPM",
            "Motor Power": "3 – 5 HP"
        },
        features: ["Vertical spindle configuration", "High precision machining", "Stable machine structure"],
        applications: ["Engineering workshops", "Manufacturing industries", "Fabrication units"],
        faqs: [
            { question: "Is this machine suitable for industrial production work?", answer: "Yes, it is widely used in manufacturing and machining industries." }
        ],
        ctaText: "Need a precision milling system for accurate metal cutting? Reach out to us now.",
        image: "/images/machines/vertical-milling-machine.png",
        altText: "metal-cutting-milling-machine"
    }
];

// --- DRILLING MACHINES DATA ---
const drillingMachines = [
    {
        name: "Vertical Milling Cum Drilling Machine",
        category: "Drilling Machines",
        categoryDescription: drillingDesc,
        subTitle: "Multi Purpose Drilling and Milling Equipment for Workshop Applications",
        shortDescription: "The Vertical Milling Cum Drilling Machine is a versatile industrial machine designed for both milling and drilling operations.",
        description: "The Vertical Milling Cum Drilling Machine is a versatile industrial machine designed for both milling and drilling operations in engineering workshops and production environments. Mech Chem Engineering Services supplies reliable combination machines suitable for tool rooms, fabrication shops, and maintenance departments requiring multi-purpose machining solutions. This machine helps improve productivity by performing multiple operations on a single platform, making it a cost-effective choice for industrial users.\n\nAs a trusted industrial machinery supplier in Nagpur, we provide durable drilling and milling machines that deliver consistent performance in daily workshop operations.",
        specifications: {
            "Drilling Capacity": "25 – 40 mm",
            "Milling Capacity": "80 – 100 mm",
            "Spindle Speed Range": "100 – 2000 RPM",
            "Table Size": "200 × 800 mm",
            "Motor Power": "2 – 3 HP",
            "Column Diameter": "100 – 120 mm"
        },
        features: ["Dual-function milling and drilling capability", "Compact and efficient machine design", "Precision spindle performance", "Rigid machine structure", "Smooth and stable operation", "Low maintenance requirement"],
        applications: ["Engineering workshops", "Tool rooms", "Fabrication units", "Maintenance departments", "Manufacturing industries"],
        faqs: [
            { question: "What is a milling cum drilling machine used for?", answer: "It is used for performing both drilling and milling operations on metal components." },
            { question: "Is this machine suitable for small and medium workshops?", answer: "Yes, it is widely used in workshops requiring multi-purpose machining equipment." },
            { question: "Do you provide installation support?", answer: "Yes, we provide machine delivery, installation, and service assistance." }
        ],
        ctaText: "Searching for a versatile milling and drilling solution? Contact us for professional support.",
        image: "/images/machines/Vertical-Milling-Cum-Drilling-Machine.png",
        altText: "vertical-milling-cum-drilling-machine",
        metaTitle: "Vertical Milling Cum Drilling Machine Supplier in Nagpur Maharashtra",
        metaDescription: "Buy vertical milling - drilling machine from a trusted supplier in Nagpur. Suitable for engineering workshops, fabrication units, and industrial machining applications."
    },
    {
        name: "Heavy Drilling Machine",
        category: "Drilling Machines",
        categoryDescription: drillingDesc,
        subTitle: "High Capacity Drilling Equipment for Industrial Production Work",
        shortDescription: "The Heavy Drilling Machine is engineered for high-capacity drilling operations in demanding industrial environments.",
        description: "The Heavy Drilling Machine is engineered for high-capacity drilling operations in demanding industrial environments. Built with a rigid structure and powerful motor, it ensures accurate drilling, long service life, and consistent performance. It is ideal for heavy fabrication, metalworking industries, and engineering workshops.",
        specifications: {
            "Machine Type": "Heavy Duty Drilling Machine",
            "Drilling Capacity": "Up to 50 mm",
            "Spindle Speed Range": "50 – 1200 RPM",
            "Spindle Travel": "200 – 250 mm",
            "Column Diameter": "180 – 250 mm",
            "Motor Power": "3 HP – 5 HP",
            "Voltage": "415V, 3 Phase",
            "Operation Type": "Manual / Semi-Automatic",
            "Machine Structure": "Heavy Duty Cast Iron",
            "Application": "Heavy Industrial Drilling"
        },
        features: ["Heavy-duty structure for demanding operations", "Powerful motor for high drilling capacity", "High accuracy drilling performance", "Strong and durable machine components", "Smooth and reliable operation", "Low maintenance requirements", "Long operational life", "Suitable for heavy industrial workloads"],
        applications: ["Heavy fabrication industries", "Engineering workshops", "Manufacturing plants", "Metal processing industries", "Machinery production units", "Steel fabrication units", "Industrial maintenance workshops"],
        faqs: [
            { question: "What is a heavy drilling machine used for?", answer: "It is used for drilling large and deep holes in heavy metal components." },
            { question: "Is this machine suitable for continuous industrial use?", answer: "Yes, it is designed for heavy-duty industrial operations." },
            { question: "What industries commonly use heavy drilling machines?", answer: "Fabrication, engineering, manufacturing, and heavy machinery industries." }
        ],
        ctaText: "Need high-capacity drilling? Contact Mech Chem Engineering Services today.",
        image: "/images/machines/Heavy-Drilling-Machine.png",
        altText: "industrial heavy duty drilling machine Supplier",
        metaTitle: "Heavy Duty Drilling Machine Supplier for Industrial Use",
        metaDescription: "Durable heavy drilling machine designed for high-precision and large-capacity drilling operations in workshops, fabrication units, and industrial applications."
    },
    {
        name: "Heavy Duty Radial Drilling Machine",
        category: "Drilling Machines",
        categoryDescription: drillingDesc,
        subTitle: "Industrial Drilling Equipment for Large and Heavy Workpieces",
        shortDescription: "The Heavy Duty Radial Drilling Machine is engineered for high-capacity drilling operations.",
        description: "The Heavy Duty Radial Drilling Machine is engineered for high-capacity drilling operations in demanding industrial environments. It is suitable for handling large metal components and performing precision drilling tasks in heavy engineering and fabrication industries. Mech Chem Engineering Services supplies robust radial drilling equipment designed for durability, strength, and reliable performance.\n\nAs an experienced industrial equipment dealer in Nagpur, we provide heavy-duty drilling machines that support continuous production and heavy workloads.",
        specifications: {
            "Drilling Capacity": "50 – 75 mm",
            "Arm Length": "1500 – 2000 mm",
            "Column Diameter": "180 – 220 mm",
            "Spindle Speed Range": "30 – 1200 RPM",
            "Motor Power": "5 – 7.5 HP",
            "Vertical Travel": "800 – 1000 mm"
        },
        features: ["High load carrying capacity", "Strong machine structure", "Precision drilling performance", "Smooth mechanical operation", "Heavy-duty components", "Extended service life"],
        applications: ["Heavy engineering industries", "Steel fabrication plants", "Manufacturing facilities", "Shipbuilding units", "Industrial workshops"],
        faqs: [
            { question: "What is the difference between standard and heavy duty radial drilling machines?", answer: "Heavy duty models are designed to handle larger components and higher drilling loads." },
            { question: "Is this machine suitable for continuous industrial production?", answer: "Yes, it is built for heavy-duty and long-duration operations." },
            { question: "Do you supply drilling machines to nearby industrial areas?", answer: "Yes, we supply machines across Nagpur, Maharashtra, and surrounding regions." }
        ],
        ctaText: "Discuss your large workpiece drilling requirements with us today.",
        image: "/images/machines/Heavy-Duty-Radial-Drilling-Machine.png",
        altText: "heavy-duty-radial-drilling-machine",
        metaTitle: "Heavy Duty Radial Drilling Machine Supplier in Nagpur Maharashtra",
        metaDescription: "Buy heavy duty radial drill machine from a trusted supplier in Nagpur. Ideal for heavy fabrication, engineering industries, and large-scale drilling operations."
    },
    {
        name: "Radial Drilling Machine",
        category: "Drilling Machines",
        categoryDescription: drillingDesc,
        subTitle: "Efficient Hole Making Solution for Fabrication and Engineering Industries",
        shortDescription: "The Radial Drilling Machine is widely used for drilling large and heavy components with precision and flexibility.",
        description: "The Radial Drilling Machine is widely used for drilling large and heavy components with precision and flexibility. It allows the drill head to move along the radial arm, making it suitable for handling oversized workpieces in engineering and fabrication environments. Mech Chem Engineering Services supplies dependable radial drilling machines for workshops, manufacturing units, and maintenance facilities requiring efficient hole-making operations.\n\nAs a reliable industrial machine supplier serving industries in Nagpur and Maharashtra, we provide robust drilling solutions designed for continuous industrial use and accurate performance.",
        specifications: {
            "Drilling Capacity": "40 – 50 mm",
            "Arm Length": "1000 – 1500 mm",
            "Column Diameter": "150 – 180 mm",
            "Spindle Speed Range": "40 – 1500 RPM",
            "Motor Power": "3 – 5 HP",
            "Vertical Travel": "600 – 800 mm"
        },
        features: ["Flexible radial arm movement", "Heavy-duty machine construction", "High drilling accuracy", "Smooth gear transmission", "Stable and vibration-free operation", "Long operational reliability"],
        applications: ["Heavy fabrication workshops", "Steel industries", "Manufacturing plants", "Automobile industries", "Engineering units"],
        faqs: [
            { question: "What industries use radial drill machines?", answer: "Radial drill machines are commonly used in fabrication, manufacturing, and heavy engineering industries." },
            { question: "Can this machine handle large components?", answer: "Yes, it is specifically designed to drill large and heavy workpieces." },
            { question: "Do you provide service and support after installation?", answer: "Yes, we offer complete machine supply, installation, and maintenance assistance." }
        ],
        ctaText: "Improve your fabrication efficiency. Get in touch for a Radial Drilling Machine quote.",
        image: "/images/machines/Radial-Drilling-Machine.png",
        altText: "radial-drilling-machine",
        metaTitle: "Radial Drilling Machine Supplier in Nagpur | Industrial Drill Machine",
        metaDescription: "Trusted radial drill machine supplier in Nagpur offering reliable drilling equipment for fabrication shops, engineering industries, and manufacturing units."
    },
    {
        name: "Geared Radial Drilling Machine",
        category: "Drilling Machines",
        categoryDescription: drillingDesc,
        subTitle: "High Precision Geared Radial Drilling Machine for Industrial Workshops",
        shortDescription: "The Geared Radial Drilling Machine provides accurate drilling with easy gear-based speed controls.",
        description: "Designed for industrial applications requiring multiple speed settings and high torque. The geared mechanism ensures smooth power transmission and long-term durability for fabrication and engineering workshops.",
        specifications: {
            "Drilling Capacity": "38 – 50 mm",
            "Spindle Travel": "220 mm",
            "Number of Speeds": "8 – 12 Speeds",
            "Motor Power": "3 HP",
            "Arm Length": "1000 – 1200 mm"
        },
        features: ["Precision gear drive system", "Easy speed change mechanism", "Rigid column and arm design", "Minimal noise and vibration", "Accurate spindle alignment"],
        applications: ["Engineering workshops", "Manufacturing plants", "Tool rooms", "Maintenance units"],
        faqs: [
            { question: "What is the benefit of a geared radial drill?", answer: "It provides constant torque and easier speed adjustments compared to belt-driven models." }
        ],
        ctaText: "Searching for high precision drilling? Contact us to know more about Geared Radial Drills.",
        image: "/images/machines/Geared-Radial-Drilling-Machine.png",
        altText: "geared-radial-drilling-machine"
    },
    {
        name: "Universal Portable Radial Drilling Machine",
        category: "Drilling Machines",
        categoryDescription: "Mech Chem Engineering Services supplies a versatile range of radial drilling machines designed for precision and durability in various industrial applications.", // Hi drilling chi common category description
        subTitle: "Versatile and Precise Drilling Solution for Heavy Workpieces",
        shortDescription: "Designed for drilling at any angle and position on large or heavy workpieces that cannot be easily moved.",
        description: "The Universal Portable Radial Drilling Machine is specifically engineered for flexibility and precision. Its unique design allows it to be moved to the workpiece, making it ideal for large and heavy components. It features a universal head that can drill at any angle, providing unmatched versatility in fabrication and maintenance workshops.",
        specifications: {
            "Drilling Capacity": "25 – 40 mm",
            "Arm Length": "600 – 1000 mm",
            "Spindle Speed Range": "60 – 1200 RPM",
            "Motor Power": "1.5 – 3 HP",
            "Head Swivel": "360 Degrees",
            "Column Diameter": "120 – 150 mm"
        },
        features: [
            "Portable and compact design",
            "Universal head for multi-angle drilling",
            "Easy movement to large workpieces",
            "High drilling accuracy",
            "Robust construction for industrial use",
            "User-friendly controls"
        ],
        applications: [
            "Heavy engineering workshops",
            "Shipbuilding and repair",
            "Large machine assembly units",
            "Maintenance departments",
            "Fabrication of oversized structures"
        ],
        faqs: [
            {
                question: "What makes a radial drilling machine 'portable'?",
                answer: "It is designed with a lifting hook and compact base so it can be moved to the site of large workpieces rather than moving the workpiece to the machine."
            },
            {
                question: "Can it drill at an angle?",
                answer: "Yes, the universal head allows for drilling at almost any angle, including horizontal and vertical positions."
            },
            {
                question: "Is it suitable for heavy-duty work?",
                answer: "While portable, it is built with high-quality materials to handle significant drilling capacities in industrial environments."
            }
        ],
        image: "/images/machines/Universal-Portable-Radial-Drilling-Machine.jpeg",
        altText: "universal-portable-radial-drilling-machine-nagpur",
        metaTitle: "Universal Portable Radial Drilling Machine Supplier in Nagpur",
        metaDescription: "Reliable supplier of Universal Portable Radial Drilling Machines in Nagpur. Ideal for large workpiece drilling at any angle."
    }
];


// 1. Lathe Category Description (H1 wala content as it is)
const latheDesc = "A lathe machine is the backbone of any workshop. We supply heavy-duty all-geared lathe machines suitable for turning, threading, facing, and boring operations. Available in various swing diameters and centre distances. Ideal for auto workshops, fabrication units, and training institutes.";

// 2. Lathe Machines Data Array
const latheMachines = [
    {
        name: "Light Duty Lathe Machine",
        category: "Lathe Machines",
        categoryDescription: latheDesc,
        subTitle: "Ideal for small workshops, training institutes, and job shops",
        shortDescription: "Light duty lathe machines are ideal for small workshops, training institutes, and job shops that require basic turning, facing, and threading operations.",
        description: "Light duty lathe machines are ideal for small workshops, training institutes, and job shops that require basic turning, facing, and threading operations. Compact in size and easy to operate, these machines are perfect for light machining work on small metal components.",
        specifications: {
            "Swing Over Bed": "150mm – 250mm",
            "Distance Between Centres": "500mm – 1000mm",
            "Spindle Speed": "100 – 2000 RPM",
            "Motor Power": "0.5 HP – 1.5 HP",
            "Spindle Bore": "20mm – 30mm"
        },
        features: [
            "Smooth operation with low vibration",
            "Easy speed and feed control",
            "Suitable for small diameter workpieces",
            "Low maintenance and durable construction",
            "Ideal for beginners and training purposes"
        ],
        applications: ["Auto workshops", "ITI & polytechnic institutes", "small job shops", "electronics workshops"],
        faqs: [
            { question: "What is a light duty lathe machine used for?", answer: "A light duty lathe machine is used for basic turning, facing, threading, and drilling operations on small metal, wood, or plastic components." },
            { question: "What is the price of a lathe machine in Nagpur?", answer: "The price of a lathe machine in Nagpur typically ranges from ₹50,000 to ₹2,00,000 depending on the specs. Contact us for best price." },
            { question: "What materials can be machined on a light duty lathe?", answer: "Light duty lathes can machine mild steel, aluminium, brass, copper, plastic, and wood for small component production." },
            { question: "Is a light duty lathe machine suitable for beginners?", answer: "Yes, simple to operate and widely used in ITI institutes and training centres." }
        ],
        ctaText: "Get free quote from Mech Chem Engineering Services.",
        image: "/images/machines/Light-duty-lathe-machine.png",
        altText: "light-duty-lathe-machine-nagpur",
        metaTitle: "Light Duty Lathe Machine Supplier in Nagpur | Mech Chem Engineering",
        metaDescription: "Buy Light Duty Lathe Machine in Nagpur at competitive prices. Ideal for small workshops, ITI institutes & job shops."
    },
    {
        name: "Medium and Heavy Duty Lathe Machine",
        category: "Lathe Machines",
        categoryDescription: latheDesc,
        subTitle: "Widely used machines in workshops and production units",
        shortDescription: "Medium and heavy duty lathe machines handle a wide range of turning, boring, threading, and facing jobs on medium to large diameter components.",
        description: "Medium and heavy duty lathe machines are the most widely used machines in workshops and production units across Maharashtra. Built for continuous operation, these machines handle a wide range of turning, boring, threading, and facing jobs on medium to large diameter components.",
        specifications: {
            "Swing Over Bed": "250mm – 500mm",
            "Distance Between Centres": "1000mm – 3000mm",
            "Spindle Speed": "40 – 1800 RPM",
            "Motor Power": "2 HP – 10 HP",
            "Spindle Bore": "38mm – 80mm"
        },
        features: [
            "All-geared headstock for consistent power delivery",
            "Wide range of spindle speeds and feeds",
            "Hardened and ground bed for long life",
            "Suitable for both production and job shop use",
            "Available with taper turning and thread cutting attachments"
        ],
        applications: ["Fabrication units", "Auto component manufacturers", "General engineering workshops", "Pump and valve manufacturers"],
        faqs: [
            { question: "What is the difference between medium duty and heavy duty lathe machines?", answer: "Medium duty (250mm-350mm swing) for general jobs; Heavy duty (above 350mm) for larger, heavier components." },
            { question: "Can heavy duty lathe machines do threading operations?", answer: "Yes, they come with a threading gearbox that supports metric, inch, and module threads." }
        ],
        ctaText: "Call now for best price & quick delivery.",
        image: "/images/machines/Heavy-And-Medium-Duty-Lathe-Machine.png",
        altText: "heavy-duty-lathe-machine-nagpur",
        metaTitle: "Medium & Heavy Duty Lathe Machine Supplier Nagpur | Mech Chem Engineering",
        metaDescription: "Supplier of Medium & Heavy Duty Lathe Machines in Nagpur. Suitable for fabrication, auto components & general engineering."
    },
    {
        name: "Extra Heavy Duty Lathe Machine",
        category: "Lathe Machines",
        categoryDescription: latheDesc,
        subTitle: "Designed for machining large, heavy workpieces",
        shortDescription: "Extra heavy duty lathe machines deliver high torque and stability for demanding industrial applications like shafts and rolls.",
        description: "Extra heavy duty lathe machines are designed for machining large, heavy workpieces such as rolls, shafts, flanges, and turbine components. Built with a robust cast iron bed and powerful drive system, these machines deliver high torque and stability for demanding industrial applications.",
        specifications: {
            "Swing Over Bed": "500mm – 2000mm",
            "Distance Between Centres": "3000mm – 10000mm",
            "Spindle Speed": "10 – 500 RPM",
            "Motor Power": "10 HP – 40 HP",
            "Spindle Bore": "80mm – 200mm"
        },
        features: [
            "Extra wide and rigid cast iron bed",
            "High torque gearbox for heavy cutting",
            "Heavy duty chuck and faceplate compatible",
            "Steady and follower rest included",
            "Suitable for large diameter and long length components"
        ],
        applications: ["Steel plants", "Paper mills", "Cement industry", "Heavy fabrication", "Power generation", "Shipbuilding"],
        faqs: [
            { question: "What is an extra heavy duty lathe machine?", answer: "A large industrial lathe designed to machine very heavy and large diameter workpieces such as shafts, rolls, and flanges." }
        ],
        ctaText: "Get best price from Mech Chem Engineering.",
        image: "/images/machines/Extra-heavy-duty-lathe-machine.png",
        altText: "extra-heavy-duty-lathe-machine-nagpur",
        metaTitle: "Extra Heavy Duty Lathe Machine Supplier in Nagpur | Mech Chem Engineering",
        metaDescription: "Buy Extra Heavy Duty Lathe Machines in Nagpur for steel, paper & power industries. High torque, large swing capacity."
    },
    {
        name: "Tool Room and Precision Lathe Machine",
        category: "Lathe Machines",
        categoryDescription: latheDesc,
        subTitle: "Built for applications where accuracy and surface finish are critical",
        shortDescription: "Used in tool rooms and die shops, these machines deliver micron-level accuracy on every job.",
        description: "Tool room and precision lathe machines are built for applications where accuracy and surface finish are critical. Used in tool rooms, die shops, and precision component manufacturing, these machines deliver micron-level accuracy on every job.",
        specifications: {
            "Swing Over Bed": "200mm – 400mm",
            "Distance Between Centres": "500mm – 2000mm",
            "Spindle Speed": "25 – 2500 RPM",
            "Motor Power": "1 HP – 5 HP",
            "Spindle Runout": "Within 0.005mm"
        },
        features: [
            "High precision spindle with minimal runout",
            "Fine feed control for superior surface finish",
            "Hardened and precision ground bed and slideways",
            "Suitable for close tolerance work",
            "Low noise and vibration operation"
        ],
        applications: ["Tool rooms", "Die & mould shops", "Precision engineering", "Defence", "Aerospace", "Medical equipment"],
        faqs: [
            { question: "What is a tool room lathe machine?", answer: "A high precision lathe designed for close tolerance work in tool rooms and die shops." },
            { question: "What is the spindle runout accuracy?", answer: "Precision lathe machines typically have spindle runout within 0.005mm." }
        ],
        ctaText: "Get free quote today for micron-level accuracy.",
        image: "/images/machines/Heavy-And-Medium-Duty-Lathe-Machine.png",
        altText: "high-accuracy-lathe-machine-tool-room",
        metaTitle: "Tool Room & Precision Lathe Machine Supplier Nagpur | Mech Chem Engineering",
        metaDescription: "Buy Tool Room & Precision Lathe Machines in Nagpur for die, mould & aerospace applications."
    },
    {
        name: "High Speed Lathe Machine",
        category: "Lathe Machines",
        categoryDescription: latheDesc,
        subTitle: "Fast material removal and high production output",
        shortDescription: "Ideal for machining aluminium, brass, and plastic at elevated speeds with excellent finish.",
        description: "High speed lathe machines are designed for fast material removal and high production output. Suitable for machining aluminium, brass, plastic, and other non-ferrous materials at elevated speeds with excellent surface finish.",
        specifications: {
            "Swing Over Bed": "150mm – 300mm",
            "Distance Between Centres": "500mm – 1500mm",
            "Spindle Speed": "100 – 3000 RPM",
            "Motor Power": "1 HP – 3 HP",
            "Spindle Bore": "25mm – 40mm"
        },
        features: [
            "High RPM spindle for fast machining",
            "Lightweight and compact design",
            "Ideal for non-ferrous and soft material machining",
            "Quick speed change mechanism",
            "Low vibration at high speeds"
        ],
        applications: ["Aluminium component manufacturers", "Plastic machining", "Electrical workshops", "Jewellery and small parts"],
        faqs: [
            { question: "What is a high speed lathe machine used for?", answer: "Fast machining of non-ferrous materials like aluminium and brass requiring high spindle speeds." }
        ],
        ctaText: "Contact us for price & availability of High Speed Lathes.",
        image: "/images/machines/Extra-heavy-duty-lathe-machine.png",
        altText: "high-rpm-lathe-machine-nagpur",
        metaTitle: "High Speed Lathe Machine Supplier in Nagpur | Mech Chem Engineering Services",
        metaDescription: "Buy High Speed Lathe Machines in Nagpur for aluminium, brass & non-ferrous machining."
    },
    {
        name: "Capstan Lathe Machine",
        category: "Lathe Machines",
        categoryDescription: latheDesc,
        subTitle: "High-volume repetitive production of components",
        shortDescription: "Multi-tool turret allows sequential operations without changing tools, reducing cycle time.",
        description: "Capstan and turret lathe machines are designed for high-volume repetitive production of small to medium components. With a multi-tool turret head, multiple operations can be performed in sequence without changing tools, drastically reducing cycle time.",
        specifications: {
            "Swing Over Bed": "150mm – 350mm",
            "Distance Between Centres": "500mm – 1500mm",
            "Spindle Speed": "50 – 2000 RPM",
            "Motor Power": "1 HP – 5 HP",
            "Number of Turret Stations": "6 – 8"
        },
        features: [
            "Multi-station turret for sequential operations",
            "High production output with reduced setup time",
            "Suitable for repetitive batch production",
            "Quick tool indexing mechanism",
            "Available in capstan (light) and turret (heavy) variants"
        ],
        applications: ["Auto component manufacturers", "Fastener industry", "Brass parts production", "Electrical fittings", "Hydraulic components"],
        faqs: [
            { question: "What is the difference between a capstan and a turret lathe?", answer: "Capstan has a lighter turret on a slide; Turret lathe has a heavier saddle-mounted turret for larger components." }
        ],
        ctaText: "Best price for batch production lathes from Mech Chem Engineering Services.",
        image: "/images/machines/Capstan-lathe-machine.png",
        altText: "capstan-lathe-machine-nagpur",
        metaTitle: "Capstan & Turret Lathe Machine Supplier Nagpur | Mech Chem Engineering",
        metaDescription: "Buy Capstan & Turret Lathe Machines in Nagpur for high volume batch production."
    },
    {
        name: "CNC Lathe Machine",
        category: "Lathe Machines",
        categoryDescription: latheDesc,
        subTitle: "High precision, repeatability, and speed for modern production",
        shortDescription: "Computer-controlled operations eliminate human error, ideal for complex profiles and large batches.",
        description: "CNC lathe machines deliver high precision, repeatability, and speed for modern production environments. Controlled by a computer program, these machines eliminate human error and are ideal for complex profiles, threading, grooving, and turning operations with consistent accuracy across large production runs.",
        specifications: {
            "Swing Over Bed": "200mm – 500mm",
            "Max Turning Diameter": "150mm – 400mm",
            "Max Turning Length": "300mm – 1000mm",
            "Spindle Speed": "50 – 4000 RPM",
            "Motor Power": "5 HP – 20 HP",
            "CNC Controller": "Fanuc / Siemens / Syntec"
        },
        features: [
            "CNC controller for automatic operation",
            "High precision ball screw and linear guides",
            "Automatic tool turret with multiple stations",
            "Suitable for complex turning profiles",
            "Consistent accuracy across large batch production"
        ],
        applications: ["Auto component manufacturers", "Aerospace", "Defence", "Medical devices", "Precision engineering"],
        faqs: [
            { question: "What is a CNC lathe machine?", answer: "A computer-controlled machine that executes programmed operations like turning and boring with high precision." }
        ],
        ctaText: "Get free quote for CNC Lathes with Fanuc & Siemens controllers.",
        image: "/images/machines/CNC-Lathe-Machine.png",
        altText: "cnc-lathe-machine-nagpur",
        metaTitle: "CNC Lathe Machine Supplier in Nagpur | Mech Chem Engineering Services",
        metaDescription: "Buy CNC Lathe Machines in Nagpur. High precision, automatic turret, fast production."
    },
    {
        name: "All Geared / Geared Head Lathe Machine",
        category: "Lathe Machines",
        categoryDescription: latheDesc,
        subTitle: "Reliability, low maintenance, and versatility",
        shortDescription: "Fully enclosed gearbox ensures consistent torque across all speeds, ideal for Indian workshops.",
        description: "All geared lathe machines use a fully enclosed gearbox for power transmission, delivering consistent torque across all speed ranges. These are the most commonly used lathe machines in Indian workshops due to their reliability, low maintenance, and versatility.",
        specifications: {
            "Swing Over Bed": "250mm – 630mm",
            "Distance Between Centres": "750mm – 4000mm",
            "Spindle Speed": "28 – 1400 RPM",
            "Motor Power": "2 HP – 15 HP",
            "Number of Speeds": "8 – 18"
        },
        features: [
            "Fully enclosed all-geared headstock",
            "Consistent power at all speeds",
            "Wide speed and feed range",
            "Suitable for turning, threading, boring, and facing",
            "Low maintenance gearbox"
        ],
        applications: ["General engineering workshops", "Fabrication units", "Auto workshops", "Pump manufacturers", "Training institutes"],
        faqs: [
            { question: "What is the advantage of all geared lathe over belt driven lathe?", answer: "Consistent torque, less maintenance, and better for heavy cutting without slippage." }
        ],
        ctaText: "Get best price & quick delivery for All Geared Lathes in Nagpur.",
        image: "/images/machines/ALL-Geared-Geared-Head-Lathe-Machine.png",
        altText: "all-geared-lathe-machine-workshop",
        metaTitle: "All Geared Lathe Machine Supplier in Nagpur | Mech Chem Engineering",
        metaDescription: "Buy All Geared & Geared Head Lathe Machines in Nagpur. Wide speed range, low maintenance."
    },
    {
        name: "Belt Driven Lathe Machine",
        category: "Lathe Machines",
        categoryDescription: latheDesc,
        subTitle: "Economical, simple to maintain, and quiet operation",
        shortDescription: "Uses a belt and pulley system, suitable for light to medium duty turning in small workshops.",
        description: "Belt driven lathe machines use a belt and pulley system for power transmission from the motor to the spindle. These are economical, simple to maintain, and suitable for light to medium duty turning operations in small workshops and training institutes.",
        specifications: {
            "Swing Over Bed": "150mm – 300mm",
            "Distance Between Centres": "500mm – 1500mm",
            "Spindle Speed": "50 – 1500 RPM",
            "Motor Power": "0.5 HP – 3 HP",
            "Drive Type": "Flat belt / V-belt"
        },
        features: [
            "Simple belt and pulley drive mechanism",
            "Economical and easy to maintain",
            "Smooth and quiet operation",
            "Suitable for light to medium duty work",
            "Ideal for small workshops and institutes"
        ],
        applications: ["ITI institutes", "Small job shops", "Training centres", "Light engineering workshops"],
        faqs: [
            { question: "What are the advantages of a belt driven lathe?", answer: "Affordable, quieter, and the belt acts as a safety slip mechanism against overloads." }
        ],
        ctaText: "Contact Mech Chem Engineering for free quote on economical lathes.",
        image: "/images/machines/V-Belt-Drive-Lathe-Machine.png",
        altText: "belt-driven-lathe-machine-nagpur",
        metaTitle: "Belt Driven Lathe Machine Supplier in Nagpur | Mech Chem Engineering",
        metaDescription: "Buy Belt Driven Lathe Machines in Nagpur at lowest price. Ideal for ITI institutes & small workshops."
    }
];

// --- GRINDING MACHINES DATA ---
const grindingMachines = [
    {
        name: "Manual Surface Grinding Machine",
        category: "Grinding Machines",
        categoryDescription: grindingDesc,
        subTitle: "Precision Flat Surface Finishing Equipment",
        shortDescription: "The Manual Surface Grinding Machine is a precision machine tool designed to produce flat, smooth, and accurate surfaces on metal workpieces using a rotating abrasive grinding wheel.",
        description: "The Manual Surface Grinding Machine is a precision machine tool designed to produce flat, smooth, and accurate surfaces on metal workpieces using a rotating abrasive grinding wheel. The operator manually controls the table traverse and cross-feed movements using handwheels, giving complete tactile control over the grinding process. Ideal for tool rooms, die shops, maintenance workshops, and small-batch production environments where precision surface finishing of hardened steel, cast iron, aluminum, and non-ferrous components is required. The machine delivers excellent surface finish (Ra values) and tight flatness tolerances on molds, dies, gauges, fixtures, and machine parts.",
        specifications: {
            "Table Size (L × W)": "450×150 mm to 1000×300 mm",
            "Max. Grinding Length": "500 mm to 1,000 mm",
            "Max. Grinding Width": "150 mm to 320 mm",
            "Max. Grinding Height": "350 mm to 500 mm",
            "Longitudinal Travel": "500 mm to 1,050 mm",
            "Cross Travel": "200 mm to 350 mm",
            "Vertical Feed": "0.005 mm (per graduation)",
            "Spindle Speed": "2,800 RPM to 3,500 RPM",
            "Grinding Wheel Size": "200×20×31.75 mm to 350×40×127 mm",
            "Spindle Motor Power": "0.75 kW to 3 kW",
            "Magnetic Chuck Size": "Matching table size",
            "Machine Weight": "600 kg to 1,800 kg"
        },
        features: [
            "Precision-ground cast iron table with manual longitudinal and cross-feed handwheel control",
            "Electromagnetic permanent magnetic chuck for secure, burr-free workpiece clamping",
            "Spindle with pre-loaded angular contact bearings for vibration-free wheel rotation",
            "Fine vertical downfeed with graduated dial (0.005 mm resolution)",
            "Horizontal and vertical dovetail guideways with hand-scraped precision surfaces",
            "Wheel guard with coolant nozzle for controlled coolant application",
            "Wheel dressing unit (diamond dresser) mounted on the table for in-situ wheel truing",
            "Coolant tank and pump system with chip settling tray",
            "Table locking mechanism for fixed-position surface plunge grinding",
            "V-way and flat-way combination guideways for accurate movement"
        ],
        applications: ["Tool rooms", "Die shops", "Maintenance workshops", "Small-batch production", "Engineering industries"],
        faqs: [
            { question: "What materials can be ground on a manual surface grinding machine?", answer: "Hardened steel, mild steel, cast iron, tool steel, stainless steel, aluminum, brass, and non-ferrous alloys can be ground." },
            { question: "What is the purpose of the magnetic chuck?", answer: "The electromagnetic or permanent magnetic chuck generates a strong magnetic field that holds ferrous workpieces firmly on the table without mechanical clamping." },
            { question: "What is the difference between manual and hydraulic surface grinding machines?", answer: "In a manual machine, the table traverse and cross-feed are controlled by hand; in a hydraulic machine, the table reciprocates automatically via a hydraulic cylinder." }
        ],
        ctaText: "Need high-precision manual surface grinding? Contact us for technical details.",
        image: "/images/machines/Manual-Surface-Grinding-Machine.png",
        altText: "Manual Surface Grinding Machine – precision surface grinder with manual table traverse and magnetic chuck",
        metaTitle: "Manual Surface Grinding Machine | Precision Flat Surface Finishing Equipment",
        metaDescription: "High-precision Manual Surface Grinding Machine for flat surface finishing of metal components. Explore key features and technical specifications."
    },
    {
        name: "Hydraulic Surface Grinding Machine",
        category: "Grinding Machines",
        categoryDescription: grindingDesc,
        subTitle: "Automatic Table Surface Grinder",
        shortDescription: "The Hydraulic Surface Grinding Machine uses a hydraulic drive system to automatically reciprocate the grinding table longitudinally.",
        description: "The Hydraulic Surface Grinding Machine is an advanced precision machine tool that uses a hydraulic drive system to automatically reciprocate the grinding table longitudinally at adjustable speeds, while cross-feed and vertical downfeed are applied incrementally after each pass. The hydraulic table traverse ensures smooth, consistent cutting speed across the full workpiece length, reducing operator fatigue and improving surface finish uniformity. Widely used in production grinding of molds, dies, machine components, gauges, and precision flat surfaces.",
        specifications: {
            "Table Size (L × W)": "550×200 mm to 3000×600 mm",
            "Max. Longitudinal Travel": "600 mm to 3,200 mm",
            "Max. Cross Travel": "250 mm to 650 mm",
            "Max. Workpiece Height": "350 mm to 600 mm",
            "Table Speed (Hydraulic)": "2 m/min to 25 m/min",
            "Auto Cross-Feed Range": "0.1 mm to 5 mm per stroke",
            "Vertical Feed": "0.005 mm (per graduation)",
            "Spindle Speed": "2,800 RPM to 3,500 RPM",
            "Grinding Wheel Size": "250×25×76.2 mm to 450×50×203 mm",
            "Spindle Motor Power": "1.5 kW to 11 kW",
            "Hydraulic Motor Power": "0.75 kW to 3 kW",
            "Machine Weight": "1,200 kg to 8,000 kg"
        },
        features: [
            "Hydraulic auto-reciprocating table with infinitely variable speed control",
            "Automatic cross-feed at table reversal with adjustable increment",
            "Fine vertical downfeed with micrometer dial (0.005 mm per graduation)",
            "Precision-hardened and ground V-flat guideway system",
            "Electromagnetic chuck with demagnetiser for quick loading",
            "Motorised or hand cross-feed with selectable direction",
            "Coolant system with magnetic separator and paper filter",
            "Spindle with precision angular contact bearings",
            "Table stroke adjustable by trip dogs for precise positioning"
        ],
        applications: ["Automotive industry", "Aerospace components", "Toolrooms", "Large-scale production units", "Die and Mold manufacturing"],
        faqs: [
            { question: "What is the advantage of hydraulic table drive over manual traverse?", answer: "Hydraulic drive provides infinitely variable and consistent table speed, eliminating speed variation of manual operation and reducing operator fatigue." },
            { question: "What is automatic cross-feed?", answer: "Automatic cross-feed advances the table laterally by a set increment at each reversal, ensuring consistent step-over for each grinding pass." }
        ],
        ctaText: "Optimise your production. Get in touch for a Hydraulic Surface Grinding Machine quote.",
        image: "/images/machines/Hydraulic-Surface-Grinding-Machine.png",
        altText: "Hydraulic Surface Grinding Machine – automatic hydraulic table reciprocating surface grinder",
        metaTitle: "Hydraulic Surface Grinding Machine | Automatic Table Surface Grinder",
        metaDescription: "High-performance Hydraulic Surface Grinding Machine with automatic table reciprocation for consistent flat surface finishing."
    },
    {
        name: "Cylindrical Grinding Machine",
        category: "Grinding Machines",
        categoryDescription: grindingDesc,
        subTitle: "OD & ID Precision Cylindrical Grinder",
        shortDescription: "The Cylindrical Grinding Machine is designed to grind the external (OD) and internal (ID) cylindrical surfaces of workpieces like shafts and spindles.",
        description: "The Cylindrical Grinding Machine is a precision machine tool designed to grind the external (OD) and internal (ID) cylindrical surfaces of workpieces such as shafts, spindles, pins, bores, sleeves, and rollers to tight dimensional tolerances and excellent surface finish. Available in plain (external OD) and universal (OD and ID) configurations, cylindrical grinders are indispensable in the production of precision shafts, hydraulic cylinders, automotive components, and industrial spindles.",
        specifications: {
            "Max. Grinding Diameter (OD)": "50 mm to 500 mm",
            "Max. Grinding Length": "500 mm to 3,000 mm",
            "Centre Height": "125 mm to 250 mm",
            "Workpiece Rotation Speed": "40 RPM to 500 RPM (variable)",
            "Grinding Wheel Size (OD)": "350×40×127 mm to 600×63×305 mm",
            "Table Traverse Speed": "0.05 m/min to 6 m/min (hydraulic)",
            "Wheelhead Infeed": "0.001 mm to 0.005 mm",
            "Taper Grinding Angle": "±10° (table swivel)",
            "Wheelhead Motor Power": "3 kW to 15 kW",
            "Machine Weight": "2,000 kg to 12,000 kg"
        },
        features: [
            "Universal or plain cylindrical configuration for OD and/or ID grinding",
            "Precision headstock with variable-speed workpiece rotation",
            "Hydraulic or manual longitudinal table traverse",
            "Swiveling workhead and table for taper grinding up to ±10 degrees",
            "Internal grinding (IG) spindle attachment for universal models",
            "High-pressure coolant system for effective chip flushing",
            "Automatic spark-out cycle for improved dimensional accuracy"
        ],
        applications: ["Precision shafts manufacturing", "Hydraulic cylinders", "Automotive components", "Bearing journals", "Industrial spindles"],
        faqs: [
            { question: "What is the difference between plain and universal cylindrical grinding machines?", answer: "A plain cylindrical grinder is solely for external (OD) grinding. A universal model can perform both OD and ID grinding using an internal grinding spindle attachment." },
            { question: "Can taper surfaces be ground?", answer: "Yes, the workpiece table or wheelhead can be swiveled to grind tapered shafts, Morse taper bores, and conical surfaces." }
        ],
        ctaText: "Looking for precision shaft grinding? Contact us for a quote today.",
        image: "/images/machines/Cylindrical-Grinding-Machine.png",
        altText: "Cylindrical Grinding Machine – precision OD cylindrical grinder for shafts",
        metaTitle: "Cylindrical Grinding Machine | OD & ID Precision Cylindrical Grinder",
        metaDescription: "Precision Cylindrical Grinding Machine for external and internal grinding of shafts, spindles, and bores."
    },
    {
        name: "Tool & Cutter Grinding Machine",
        category: "Grinding Machines",
        categoryDescription: grindingDesc,
        subTitle: "Precision Cutting Tool Sharpening Equipment",
        shortDescription: "The Tool & Cutter Grinding Machine is designed to sharpen, re-grind, and manufacture a wide range of cutting tools.",
        description: "The Tool & Cutter Grinding Machine is a highly versatile precision grinding machine designed to sharpen, re-grind, and manufacture a wide range of cutting tools including end mills, face mills, drills, reamers, taps, lathe tools, and form tools. The machine uses various grinding wheel profiles and a universal worktable with swivel and tilt capabilities to accurately grind cutting edges, relief angles, and flute geometries on HSS and carbide tools.",
        specifications: {
            "Table Longitudinal Travel (X)": "300 mm to 600 mm",
            "Table Cross Travel (Y)": "150 mm to 300 mm",
            "Vertical Travel (Z)": "300 mm to 500 mm",
            "Table Swivel Range": "360°",
            "Wheelhead Swivel": "360°",
            "Workhead Tilt": "±45°",
            "Spindle Speed (Horizontal)": "2,800 RPM to 5,000 RPM",
            "Spindle Speed (Vertical)": "3,600 RPM to 8,000 RPM",
            "Collet Range": "3 mm to 32 mm",
            "Machine Weight": "350 kg to 900 kg"
        },
        features: [
            "Universal worktable with X, Y, Z axis movement and swivel/tilt",
            "Motorised vertical and horizontal grinding spindles",
            "Collet chuck system for accurate tool centring",
            "Universal work head with 360-degree rotation",
            "Diamond and CBN wheel compatibility for carbide and HSS tools",
            "Precision dovetail slides for smooth movement"
        ],
        applications: ["Tool rooms", "Cutting tool manufacturing", "Maintenance workshops", "Precision engineering"],
        faqs: [
            { question: "What cutting tools can be ground on this machine?", answer: "End mills, drills, reamers, taps, lathe turning tools, and gear cutters can all be sharpened and re-ground." },
            { question: "Can carbide tools be ground?", answer: "Yes, diamond grinding wheels are used for carbide tools. Wet grinding with coolant is recommended to prevent thermal cracking." }
        ],
        ctaText: "Ensure maximum tool life. Contact us for a Tool & Cutter Grinding Machine quote.",
        image: "/images/machines/Tool-Cutter-Grinding-Machine.png",
        altText: "Tool & Cutter Grinding Machine – universal tool and cutter grinder for sharpening",
        metaTitle: "Tool & Cutter Grinding Machine | Precision Cutting Tool Sharpening Equipment",
        metaDescription: "Versatile Tool & Cutter Grinding Machine for sharpening and re-grinding end mills, drills, reamers, and milling cutters."
    },

];



// --- WORKHOLDING TOOLS DATA ---
const workholdingTools = [
    {
        name: "Self Centering Lathe Chuck",
        category: "Workholding Tools",
        categoryDescription: workholdingDesc,
        subTitle: "Precision Workholding for Symmetrical & Round Components",
        shortDescription: "The Self-Centering Lathe Chuck is a fundamental workholding accessory engineered for efficiency and precision in turning operations.",
        description: "The Self-Centering Lathe Chuck is a fundamental workholding accessory engineered for efficiency and precision in turning operations. Powered by a scroll plate mechanism, all jaws advance or retract simultaneously when the key is turned, automatically centering the workpiece without manual adjustment. This dramatically reduces setup time compared to independent jaw chucks, making it the preferred choice for high-volume production environments. The chuck body is manufactured from high-grade alloy steel, hardened and precision-ground to ensure runout accuracy within tight tolerances. It is available in 3-jaw and 6-jaw configurations for a variety of workpiece geometries.",
        specifications: {
            "Chuck Diameter Range": "100 mm to 630 mm",
            "Clamping Range (External)": "2 mm – 250 mm (model-dependent)",
            "Clamping Range (Internal)": "30 mm – 600 mm (model-dependent)",
            "Runout Accuracy (TIR)": "≤ 0.03 mm",
            "Max Spindle Speed": "Up to 4,500 RPM (for CNC models)",
            "Body Material": "Forged Steel / High-Tensile Cast Iron",
            "Jaw Material": "Hardened Alloy Steel (Case Hardened)",
            "Mounting Standard": "ISO 702-1 (ASA) / DIN 55026 / Plain Back",
            "Through-Bore Diameter": "20 mm to 160 mm",
            "Weight (typical 200 mm)": "Approx. 14 kg"
        },
        features: [
            "Scroll plate mechanism for simultaneous jaw movement",
            "High-accuracy self-centering within ±0.05 mm TIR (Total Indicator Reading)",
            "Reversible jaws for both internal and external clamping",
            "Hardened and ground alloy steel body for long service life",
            "Available in 100 mm to 630 mm diameter options",
            "Dynamic balancing for high-speed CNC lathe applications",
            "Grease nipples for regular lubrication and smooth operation",
            "Secure direct mounting or back-plate mounting to lathe spindles"
        ],
        applications: [
            "High-volume production environments",
            "Symmetrical and round component turning",
            "CNC and manual lathe applications"
        ],
        faqs: [
            {
                question: "What is the difference between a 3-jaw and a 4-jaw chuck?",
                answer: "A 3-jaw chuck is self-centering and moves all jaws together, making it ideal for round or hexagonal stock. A 4-jaw independent chuck allows each jaw to move separately, which is necessary for irregular shapes and off-center turning."
            },
            {
                question: "Can I use a self-centering chuck on a CNC lathe?",
                answer: "Yes. CNC lathes typically use hydraulic or pneumatic self-centering chucks for automated, high-speed operation, whereas manual lathes use manual scroll chucks."
            },
            {
                question: "What are soft jaws and when are they used?",
                answer: "Soft jaws are un-hardened steel or aluminum jaws that can be machined to match a specific workpiece diameter. They provide maximum surface contact and prevent marking on pre-machined surfaces."
            },
            {
                question: "How often should a lathe chuck be lubricated?",
                answer: "For production environments, the chuck should be greased daily through the grease nipples using high-pressure chuck grease to maintain gripping force and prevent wear."
            }
        ],
        ctaText: "Buy premium Self-Centering Lathe Chucks for fast, accurate workholding. Ideal for round and hexagonal workpieces on CNC & manual lathes.",
        image: "/images/machines/Self-Centering-Lathe-Chuck.png",
        altText: "Self-Centering 3-Jaw Lathe Chuck for CNC and Manual Turning Operations",
        metaTitle: "Self-Centering Lathe Chuck | Automatic Jaw Chuck for CNC & Manual Lathes",
        metaDescription: "Buy premium Self-Centering Lathe Chucks for fast, accurate workholding. Ideal for round and hexagonal workpieces on CNC & manual lathes. Available in 3-jaw and scroll chuck configurations."
    },
    {
        name: "For Jaw Independent Chuck",
        category: "Workholding Tools",
        categoryDescription: workholdingDesc,
        subTitle: "Heavy-Duty Adjustability for Asymmetrical & Large Components",
        shortDescription: "The 4-Jaw Independent Chuck provides ultimate flexibility and maximum gripping force for irregular, rectangular, or asymmetrical workpieces.",
        description: "The 4-Jaw Independent Chuck provides ultimate flexibility and maximum gripping force for irregular, rectangular, or asymmetrical workpieces. Each jaw is adjusted independently via a dedicated operating screw, allowing the machinist to align workpieces with absolute precision or set up eccentric turning operations. The heavy-duty design features rigid jaw guides and a robust cast iron or steel body, engineered to withstand high cutting forces during heavy roughing cuts on large-diameter forgings and castings.",
        specifications: {
            "Chuck Size Range": "160 mm to 1250 mm",
            "Jaw Adjustment Style": "Independent manual screw per jaw",
            "Concentricity Capability": "≤ 0.01 mm (with dial indicator)",
            "Jaw Travel per Revolution": "3 mm – 6 mm",
            "Body Material": "GG25 Cast Iron / Ductile Iron",
            "Jaw Serration": "1.5 mm × 60°",
            "Max Clamping Force (per jaw)": "Up to 60 kN",
            "Mounting": "Plain Back / DIN 55026 / ASA",
            "Weight (typical 315 mm)": "Approx. 28 kg"
        },
        features: [
            "Independently adjustable jaws for clamping irregular or rectangular parts",
            "Four-jaw design offers superior gripping power compared to scroll chucks",
            "Ideal for precise dialing-in of workpieces using an indicator",
            "Solid cast iron or high-tensile steel body options available",
            "Reversible solid jaws or master jaws with top jaws configuration",
            "Deep jaw serrations for aggressive gripping on rough castings",
            "T-slots integrated into larger chuck sizes for additional faceplate clamping",
            "Hardened operating screws with high wear resistance"
        ],
        applications: [
            "Castings and forgings machining",
            "Square billets and rectangular plates holding",
            "Off-center boring and eccentric turning jobs",
            "Complex workpieces requiring high concentricity"
        ],
        faqs: [
            {
                question: "How do I center a workpiece in a 4-jaw independent chuck?",
                answer: "Mount a dial test indicator on the tool post, place the tip on the workpiece OD, and rotate the spindle by hand. Adjust opposite jaw pairs alternately while watching the indicator until runout is within tolerance."
            },
            {
                question: "What workpieces are best suited for a 4-jaw independent chuck?",
                answer: "Castings, forgings, square billets, rectangular plates, off-center boring jobs, and any workpiece where concentricity must be maintained to an existing machined feature."
            },
            {
                question: "Is a 4-jaw independent chuck slower to set up?",
                answer: "Yes, setup takes longer than a self-centering chuck. However, it provides superior accuracy and versatility that cannot be matched by scroll-type chucks for complex workpieces."
            },
            {
                question: "Can I use soft jaws in a 4-jaw independent chuck?",
                answer: "Yes. Un-hardened (soft) jaws can be mounted and bored to a custom profile for gentle clamping of finished surfaces or delicate parts."
            },
            {
                question: "What sizes are available?",
                answer: "Independent 4-jaw chucks are available from 160 mm (for bench lathes) up to 1250 mm or larger for heavy-duty industrial vertical boring mills."
            }
        ],
        ctaText: "Shop industrial-grade 4-Jaw Independent Chucks. Achieve unmatched centering precision and heavy-duty clamping for irregular workpieces.",
        image: "/images/machines/Four-Jaw-Independent-Chuck.png",
        altText: "4-Jaw Independent Lathe Chuck with Individually Adjustable Jaws for Custom Turning Setup",
        metaTitle: "4-Jaw Independent Chuck | Manual Adjusting Lathe Chuck for Irregular Components",
        metaDescription: "Shop industrial-grade 4-Jaw Independent Chucks. Achieve unmatched centering precision and heavy-duty clamping for irregular workpieces. Perfect for castings and eccentric turning."
    }
];

// --- FINISHING & COATING MACHINES DATA ---
const finishingCoatingMachines = [
    {
        name: "Powder Coating Machine",
        category: "Finishing and Coating Machines",
        categoryDescription: finishingCoatingDesc,
        subTitle: "Electrostatic Powder Coating System for Durable Surface Finishing",
        shortDescription: "The Powder Coating Machine is a complete surface finishing system that delivers superior coating quality compared to conventional liquid paint.",
        description: "The Powder Coating Machine is a complete surface finishing system that delivers superior coating quality compared to conventional liquid paint. The process involves applying electrostatically charged powder particles to a grounded metallic workpiece using a spray gun, ensuring uniform adhesion even on complex geometries. The coated part is then conveyed into a curing oven where the powder melts and cross-links into a smooth, continuous film. The result is a finish that is far more resistant to chipping, corrosion, UV degradation, and chemical exposure than wet paint. The system is also environmentally friendly — overspray can be recovered and reused, and the process emits negligible VOCs (volatile organic compounds).",
        specifications: {
            "Voltage Input": "220V/380V, 50/60 Hz",
            "Output Voltage (Gun)": "0 – 100 kV (Negative)",
            "Output Current (Gun)": "0 – 150 μA",
            "Max. Powder Injection": "Up to 600 g/min",
            "Air Consumption": "12–15 m³/h",
            "Powder Hopper Capacity": "25 kg / 50 kg (Stainless Steel)",
            "Curing Oven Temp. Range": "150°C – 250°C",
            "Oven Heating Source": "Electric / LPG / Natural Gas / Diesel",
            "Control Panel Type": "Digital PLC with touch screen",
            "Gun Weight": "Approx. 480 grams"
        },
        features: [
            "Electrostatic spray gun with adjustable voltage (0–100 kV)",
            "Powder recovery and reclaim system (up to 98% efficiency)",
            "Batch and continuous conveyor configurations available",
            "Digital PLC control panel for precise recipe management",
            "Uniform coating thickness across flat and recessed surfaces",
            "High-grade stainless steel fluidizing powder hopper",
            "Rapid color-change design for multi-color operations",
            "Energy-efficient curing oven with high-density insulation",
            "Built-in safety features including over-current and ground faults protection",
            "Eco-friendly process with zero VOC emissions"
        ],
        applications: [
            "Automotive parts and wheel rims",
            "Appliance panels and metal furniture",
            "Architectural aluminum extrusions",
            "Industrial machinery frames and enclosures"
        ],
        faqs: [
            {
                question: "What are the primary benefits of powder coating over liquid paint?",
                answer: "Powder coating provides a thicker, more durable finish that resists chipping, scratching, and fading. It is also more cost-effective because overspray can be reclaimed, and it is eco-friendly as it contains no solvents or VOCs."
            },
            {
                question: "What is the typical curing temperature and time for powder coating?",
                answer: "Most powders require a curing oven temperature between 180°C and 200°C (350°F to 400°F) for 10 to 20 minutes, depending on the metal thickness and powder specifications."
            },
            {
                question: "Can non-metallic materials be powder coated?",
                answer: "Powder coating requires the substrate to be electrically conductive to attract the charged powder. However, specialized powders and processes exist for coating MDF (medium-density fiberboard) and certain plastics."
            },
            {
                question: "How efficient is the powder recovery system?",
                answer: "Modern powder coating booths with multi-cyclone or cartridge filter recovery systems can achieve up to 95% to 98% material utilization by collecting and reusing overspray."
            },
            {
                question: "What surface preparation is needed before powder coating?",
                answer: "The metal must be thoroughly cleaned of oil, grease, rust, and scale via degreasing, shot blasting, or chemical phosphating to ensure proper coating adhesion."
            }
        ],
        ctaText: "Get high-efficiency Powder Coating Machines for a superior finish. Available in batch and automatic conveyor models for industrial metal coating.",
        image: "/images/machines/Powder-Coating-Machine.png",
        altText: "Industrial Powder Coating Machine with Electrostatic Spray Gun and Curing Oven",
        metaTitle: "Powder Coating Machine | Electrostatic Spray & Curing System Manufacturer",
        metaDescription: "Industrial powder coating machines for metal surface finishing. Electrostatic spray guns, conveyor ovens, and batch curing systems. Achieve uniform, corrosion-resistant, and eco-friendly coatings."
    }

];



// --- BANDSAW MACHINES DATA ---
const bandsawMachines = [
    {
        name: "Double Column Automatic Bandsaw Machine",
        category: "Bandsaw Machines",
        categoryDescription: bandsawDesc,
        subTitle: "Heavy Duty Metal Cutting Bandsaw",
        shortDescription: "The Double Column Automatic Bandsaw Machine is designed for high-precision and heavy-duty metal cutting applications.",
        description: "The Double Column Automatic Bandsaw Machine is designed for high-precision and heavy-duty metal cutting applications. Built with a rigid double-column structure, this machine ensures vibration-free operation, smooth blade movement, and superior cutting accuracy for industrial production environments. Suitable for cutting solid bars, pipes, square sections, and structural materials, the machine offers automatic hydraulic operation, multiple indexing stock feeding, and efficient coolant circulation for continuous production. It is widely used in fabrication industries, steel plants, engineering workshops, automobile industries, and manufacturing units. Our automatic bandsaw machines are engineered for durability, productivity, and low maintenance, making them ideal for industrial metal cutting requirements.",
        specifications: {
            "Models Available": "200 DCA / 330 DCA / 425 DCA",
            "Cutting Capacity Round Dia.": "200 mm / 330 mm / 425 mm",
            "Cutting Capacity Rectangle": "200 × 200 mm / 330 × 330 mm / 425 mm",
            "Main Motor": "3 HP / 3 HP / 5 HP",
            "Hydraulic Motor": "1 HP / 1 HP / 1 HP",
            "Coolant Motor": "0.15 HP / 0.15 HP / 0.15 HP",
            "Cutting Speed": "20–70 m/min / 20–70 m/min / AC Drive",
            "Blade Size": "3760 × 0.9 × 1.1 mm / 4100 × 34 × 1.1 mm / 5450 × 41 × 1.1 mm",
            "Floor Space Size": "2.25 × 2.35 × 1.5 m / 2.5 × 2.5 × 1.5 m / 2.5 × 2.5 × 1.5 m",
            "Single Indexing Stock": "200 mm / 0–330 mm / 0–425 mm",
            "Multiple Indexing Stock": "9 Times / 9 Times / 9 Times",
            "Band Tension": "Hydraulic / Hydraulic / Hydraulic",
            "Saw Feed Control": "Hydraulic / Hydraulic / Hydraulic",
            "Hydraulic Tank Capacity": "40 Ltr / 50 Ltr / 75 Ltr",
            "Coolant Tank Capacity": "80 Ltr / 80 Ltr / 90 Ltr",
            "Total Power": "4.75 HP / 4.75 HP / 6.4 HP",
            "Cutting Accuracy": "±0.2 / ±0.2 / ±0.4",
            "Wire Brush Motor": "0.25 HP / 1.25 HP / 1.25 HP"
        },
        features: [
            "Heavy-duty double column structure for stable cutting",
            "Fully automatic hydraulic operation",
            "High cutting accuracy and smooth finish",
            "Suitable for round, square, and rectangular material cutting",
            "Hydraulic blade tension system",
            "Multiple indexing stock feeding system",
            "Efficient coolant circulation for longer blade life",
            "Hydraulic saw feed control for precise operation",
            "Heavy-duty conveyor and vice system",
            "Low vibration and low noise operation",
            "Designed for continuous industrial production",
            "User-friendly control panel",
            "Durable and maintenance-friendly design"
        ],
        applications: [
            "Steel industries",
            "Heavy engineering industries",
            "Fabrication workshops",
            "Automobile industries",
            "Forging units",
            "Pipe and tube industries",
            "Tool rooms",
            "Metal processing industries",
            "Industrial manufacturing plants",
            "Structural steel cutting applications"
        ],
        serviceSupport: [
            "Machine installation support",
            "Operator training assistance",
            "Spare parts availability",
            "Technical troubleshooting",
            "Preventive maintenance guidance",
            "On-call service support",
            "Machine operation consultation"
        ],
        faqs: [
            {
                question: "What materials can this bandsaw machine cut?",
                answer: "The machine can cut mild steel, stainless steel, alloy steel, solid bars, pipes, square sections, and structural materials."
            },
            {
                question: "Is this machine fully automatic?",
                answer: "Yes, this is a fully automatic hydraulic bandsaw machine designed for continuous industrial production."
            },
            {
                question: "What cutting sizes are available?",
                answer: "The machine is available in 200 DCA, 330 DCA, and 425 DCA models with different cutting capacities."
            },
            {
                question: "Does the machine include coolant and hydraulic systems?",
                answer: "Yes, the machine comes with built-in hydraulic and coolant systems for efficient operation and longer blade life."
            },
            {
                question: "Where is this machine commonly used?",
                answer: "It is commonly used in fabrication industries, engineering workshops, steel plants, and manufacturing industries."
            },
            {
                question: "Do you provide installation and service support?",
                answer: "Yes, we provide installation guidance, technical support, spare parts support, and maintenance assistance."
            }
        ],
        ctaText: "High-performance Double Column Automatic Bandsaw Machine for accurate and heavy-duty metal cutting. Ideal for industrial cutting applications with hydraulic control, automatic indexing, and precision cutting.",
        image: "/images/machines/Double-Column-Automatic-BandsawMachine.png",
        altText: "Double Column Automatic Bandsaw Machine for Industrial Heavy Duty Metal Cutting",
        metaTitle: "Double Column Automatic Bandsaw Machine Supplier in Nagpur | Heavy Duty Metal Cutting Bandsaw",
        metaDescription: "High-performance Double Column Automatic Bandsaw Machine for accurate and heavy-duty metal cutting. Ideal for industrial cutting applications with hydraulic control, automatic indexing, and precision cutting. Available in 200 DCA, 330 DCA & 425 DCA models."
    },
    {
        name: "Double Column Semi Automatic Bandsaw Machine",
        category: "Bandsaw Machines",
        categoryDescription: bandsawDesc,
        subTitle: "Heavy Duty Metal Cutting Bandsaw",
        shortDescription: "The Double Column Semi Automatic Bandsaw Machine is designed for precise and efficient metal cutting operations in industrial environments.",
        description: "The Double Column Semi Automatic Bandsaw Machine is designed for precise and efficient metal cutting operations in industrial environments. Built with a strong double-column structure, the machine ensures excellent cutting stability, smooth blade movement, and high operational reliability. This semi automatic bandsaw machine is suitable for cutting solid bars, pipes, square sections, and structural steel materials with high cutting accuracy. Equipped with hydraulic control systems and heavy-duty components, it delivers consistent performance for continuous industrial applications. We supply high-quality Double Column Semi Automatic Bandsaw Machines in Nagpur, Maharashtra, catering to fabrication industries, engineering workshops, steel industries, and manufacturing plants across India.",
        specifications: {
            "Models Available": "200 DCSA / 330 DCSA / 425 DCSA / 500 DCSA / 600 DCSA",
            "Cutting Capacity Round Dia.": "200 mm / 330 mm / 425 mm / 500 mm / 600 mm",
            "Cutting Capacity Rectangle": "200 × 200 mm / 330 × 330 mm / 425 × 425 mm / 500 × 500 mm / 600 × 600 mm",
            "Main Motor": "3 HP / 3 HP / 5 HP / 7.5 HP / 10 HP",
            "Hydraulic Motor": "1 HP / 1 HP / 1.5 HP / 1.5 HP / 1.5 HP",
            "Coolant Motor": "0.15 HP / 0.15 HP / 0.15 HP / 0.15 HP / 0.15 HP",
            "Cutting Speed": "20–70 m/min / 20–70 m/min / AC Drive Counter / AC Drive Counter / AC Drive Counter",
            "Blade Size": "3760 × 0.9 × 1.1 mm / 4100 × 34 × 1.1 mm / 5450 × 41 × 1.1 mm / 6900 × 54 × 1.3 mm / 8000 × 68 × 1.6 mm",
            "Floor Space Size": "1.25 × 2.35 × 1.5 m / 2.5 × 2.5 × 1.5 m / 2.7 × 3.7 × 1.7 m / 3 × 3 × 1.7 m / 3 × 4 × 2.5 m",
            "Single Indexing Stock": "– / – / – / – / –",
            "Band Tension": "Hydraulic / Hydraulic / Hydraulic / Hydraulic / Hydraulic",
            "Saw Feed Control": "Hydraulic / Hydraulic / Hydraulic / Hydraulic / Hydraulic",
            "Hydraulic Tank Capacity": "40 Ltr / 45 Ltr / 75 Ltr / 55–60 Ltr / 80 Ltr",
            "Coolant Tank Capacity": "80 Ltr / 80 Ltr / 90 Ltr / 80 Ltr / 120 Ltr",
            "Net Weight": "1500 Kg / 1600 Kg / 1900 Kg / 2200 Kg / 4000 Kg",
            "Total Power": "4.75 HP / 4.75 HP / 6.4 HP / 9.75 HP / 12 HP",
            "Cutting Accuracy": "±0.2 / ±0.3 / ±0.4 / ±0.5 / ±0.6",
            "Wire Brush Motor": "0.25 HP / 0.25 HP / 0.25 HP / 0.25 HP / 0.25 HP"
        },
        features: [
            "Heavy-duty double column design for stable operation",
            "Semi automatic hydraulic control system",
            "Smooth and accurate metal cutting performance",
            "Suitable for round, square, and rectangular material cutting",
            "Hydraulic band tension system",
            "Hydraulic saw feed control",
            "AC drive cutting speed control in higher models",
            "Durable machine body for long working life",
            "Efficient coolant circulation system",
            "Low vibration and low maintenance operation",
            "User-friendly control panel",
            "High cutting efficiency for industrial production",
            "Precision cutting with reliable accuracy"
        ],
        applications: [
            "Steel fabrication industries",
            "Heavy engineering workshops",
            "Automobile industries",
            "Metal cutting industries",
            "Pipe and tube cutting applications",
            "Structural steel cutting",
            "Manufacturing industries",
            "Forging industries",
            "Industrial production plants",
            "Tool rooms and fabrication units"
        ],
        serviceSupport: [
            "Installation guidance",
            "Technical support assistance",
            "Spare parts support",
            "Machine operation guidance",
            "Preventive maintenance support",
            "Troubleshooting assistance",
            "After-sales service support"
        ],
        faqs: [
            {
                question: "What materials can this machine cut?",
                answer: "The machine can cut mild steel, stainless steel, alloy steel, pipes, bars, square sections, and structural materials."
            },
            {
                question: "Is this machine suitable for industrial production?",
                answer: "Yes, the machine is designed for heavy-duty industrial metal cutting applications."
            },
            {
                question: "What is the difference between automatic and semi automatic bandsaw machines?",
                answer: "Semi automatic bandsaw machines require partial operator control, while automatic models perform cutting cycles automatically."
            },
            {
                question: "Does the machine include hydraulic operation?",
                answer: "Yes, the machine comes with hydraulic feed control and hydraulic band tension systems."
            },
            {
                question: "Which models are available?",
                answer: "Available models include 200 DCSA, 330 DCSA, 425 DCSA, 500 DCSA, and 600 DCSA."
            },
            {
                question: "Do you provide service and spare parts support?",
                answer: "Yes, we provide technical support, spare parts, and after-sales service assistance."
            }
        ],
        ctaText: "High-performance Double Column Semi Automatic Bandsaw Machine for accurate metal cutting applications. Hydraulic operation, rigid structure, and heavy-duty cutting performance ideal for industrial use.",
        image: "/images/machines/Double-Column-Semi-Automatic-BandsawMachine.png",
        altText: "Double Column Semi Automatic Bandsaw Machine for Metal Cutting",
        metaTitle: "Double Column Semi Automatic Bandsaw Machine Supplier in Nagpur | Heavy Duty Metal Cutting Bandsaw",
        metaDescription: "High-performance Double Column Semi Automatic Bandsaw Machine for accurate metal cutting applications. Hydraulic operation, rigid structure, and heavy-duty cutting performance ideal for industrial use. Available in 200 DCSA, 330 DCSA, 425 DCSA, 500 DCSA & 600 DCSA models."
    }
];






// --- 1. INDUSTRIAL MACHINES (Total 8 as per screenshot) ---
const industrialMachines = [
    {
        name: "Lathe Machines",
        dataType: "product",
        category: "Industrial Machines",
        image: "/home/mechindustrialmachine/Extra-heavy-duty-lathe-machine.png",
        shortDescription: "High precision lathe machines for metal machining."
    },

    {
        name: "Milling Machines",
        dataType: "product",
        category: "Industrial Machines",
        image: "/home/mechindustrialmachine/Milling-Machines.png",
        shortDescription: "Advanced milling machines for workshop operations."
    },

    {
        name: "Drilling Machines",
        dataType: "product",
        category: "Industrial Machines",
        image: "/home/mechindustrialmachine/Drilling-Machines.png",
        shortDescription: "Heavy duty drilling machines for industrial applications."
    },

    {
        name: "Grinding Machines",
        dataType: "product",
        category: "Industrial Machines",
        image: "/home/mechindustrialmachine/Hydraulic-Surface-Grinding-Machine.png",
        shortDescription: "Precision grinding machines for smooth surface finishing."
    },

    {
        name: "Bandsaw Machines",
        dataType: "product",
        category: "Industrial Machines",
        image: "/home/mechindustrialmachine/Double-Column-Automatic-Bandsaw-Machine.png",
        shortDescription: "Industrial cutting machines for accurate metal cutting."
    },

    {
        name: "Workholding Tools",
        dataType: "product",
        category: "Industrial Machines",
        image: "/home/mechindustrialmachine/Four-Jaw-Independent-Chuck.png",
        shortDescription: "Reliable welding machines for fabrication and repair."
    },

    {
        name: "Finishing & Coating Machines",
        dataType: "product",
        category: "Industrial Machines",
        image: "/home/mechindustrialmachine/Radial-Drilling-Machine-SupplierinNagpur.png",
        shortDescription: "Powerful heavy machines for industrial manufacturing work."
    },


];

// --- 2. i-NAX MACHINES (Total 4 - Placeholder path dila aahe) ---
const inaxSectionData = [
    { name: "Fiber Laser Cutting", dataType: "product", category: "inax", image: "/home/mechindustrialmachine/Lathe Machine.png", shortDescription: "Open & Closed Body laser cutting solution." },
    { name: "CNC Press Brake", dataType: "product", category: "inax", image: "/home/mechindustrialmachine/Lathe Machine.png", shortDescription: "Precision bending technology." },
    { name: "CNC Plasma Cutting", dataType: "product", category: "inax", image: "/home/mechindustrialmachine/Lathe Machine.png", shortDescription: "Industrial plasma cutting." },
    { name: "Laser Welding", dataType: "product", category: "inax", image: "/home/mechindustrialmachine/Lathe Machine.png", shortDescription: "Advanced laser welding machine." }
];

// --- 3. CUSTOMER TESTIMONIALS (Total 3) ---
const customerGallery = [

    {
        name: "Customer Work 1",
        dataType: "testimonial",
        image: "/home/mechindustrialmachine/cus-one.png"
    },
    {
        name: "Customer Work 2",
        dataType: "testimonial",
        image: "/home/mechindustrialmachine/cus-two.png"
    },
    {
        name: "Customer Work 3",
        dataType: "testimonial",
        image: "/home/mechindustrialmachine/lathe-machine.png"
    }

];

// const seedDB = async () => {
//     try {
//         await mongoose.connect(MONGO_URI);
//         console.log("🚀 Connected to MongoDB Cluster...");

//         // 1. DELETE ALL OLD DATA (Safety First)
//         await Machine.deleteMany({});
//         console.log("🧹 Old records cleared from Database.");

//         // 2. COMBINE ALL CATEGORIES
//         const allMachines = [...bandsawMachines, ...finishingCoatingMachines, ...workholdingTools, ...millingMachines, ...drillingMachines, ...industrialMachines, ...inaxSectionData, ...customerGallery, ...latheMachines, ...grindingMachines];


//         console.log("Customer Gallery:", customerGallery.length)

//         console.log(
//             allMachines.filter(item => item.dataType === "testimonial")
//         )

//         // 3. INSERT NEW DATA
//         await Machine.insertMany(allMachines);
//         console.log(`✅ Success: ${allMachines.length} Machines (Milling & Drilling) Seeded Successfully!`);

//         process.exit();
//     } catch (err) {
//         console.error("❌ Seeding Error:", err);
//         process.exit(1);
//     }
// };

const seedDB = async () => {
try {
await mongoose.connect(MONGO_URI);
console.log("🚀 Connected to MongoDB Cluster...");

// 1. DELETE ALL OLD DATA
await Machine.deleteMany({});
console.log("🧹 Old records cleared from Database.");

// 2. COMBINE ALL CATEGORIES
const allMachines = [
  ...bandsawMachines,
  ...finishingCoatingMachines,
  ...workholdingTools,
  ...millingMachines,
  ...drillingMachines,
  ...industrialMachines,
  ...inaxSectionData,
  ...customerGallery,
  ...latheMachines,
  ...grindingMachines
];

console.log("Customer Gallery Length:", customerGallery.length);

console.log(
  "Testimonials Before Insert:",
  allMachines.filter(item => item.dataType === "testimonial")
);

// 3. INSERT NEW DATA
const inserted = await Machine.insertMany(allMachines);

console.log(
  "Inserted Testimonials:",
  inserted.filter(item => item.dataType === "testimonial")
);

console.log(
  "Inserted Testimonials Count:",
  inserted.filter(item => item.dataType === "testimonial").length
);

console.log(
  `✅ Success: ${allMachines.length} Machines Seeded Successfully!`
);

process.exit();

} catch (err) {
console.error("❌ Seeding Error:", err);
process.exit(1);
}
};


seedDB();

