#!/bin/bash

# Generate all module pages
echo "Generating module pages..."

# Hospital Operations
cat > hospital-operations.html << 'EOF'
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hospital Operations | Maxcode Solutions</title>
    <link rel="stylesheet" href="styles.css">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>
    <nav class="navbar">
        <div class="nav-container">
            <div class="nav-logo">
                <i class="fas fa-hospital-alt"></i>
                <span>Maxcode Solutions</span>
            </div>
            <ul class="nav-menu">
                <li><a href="index.html#home" class="nav-link">Home</a></li>
                <li><a href="index.html#features" class="nav-link">Features</a></li>
                <li><a href="index.html#modules" class="nav-link">Modules</a></li>
                <li><a href="index.html#benefits" class="nav-link">Benefits</a></li>
                <li><a href="index.html#contact" class="nav-link">Contact</a></li>
            </ul>
            <div class="nav-toggle">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </div>
    </nav>

    <section class="module-detail">
        <div class="container">
            <div class="module-detail-header">
                <div class="module-icon">
                    <i class="fas fa-hospital"></i>
                </div>
                <h1>Hospital Operations</h1>
                <p class="module-subtitle">Streamlined hospital resource and facility management</p>
            </div>
            
            <div class="module-content">
                <div class="module-description">
                    <h2>Overview</h2>
                    <p>The Hospital Operations module streamlines the day-to-day management of hospital resources, staff, and facilities. It ensures optimal utilization of beds, rooms, equipment, and personnel while maintaining high standards of patient care and operational efficiency.</p>
                </div>

                <div class="module-features-section">
                    <h2>Key Features</h2>
                    <div class="features-grid">
                        <div class="feature-item">
                            <i class="fas fa-bed"></i>
                            <h3>Bed Management</h3>
                            <p>Real-time bed availability tracking with automated bed allocation and discharge management.</p>
                        </div>
                        <div class="feature-item">
                            <i class="fas fa-door-open"></i>
                            <h3>Room Scheduling</h3>
                            <p>Efficient room allocation and scheduling with conflict detection and resource optimization.</p>
                        </div>
                        <div class="feature-item">
                            <i class="fas fa-users"></i>
                            <h3>Staff Scheduling</h3>
                            <p>Comprehensive staff scheduling with shift management and workload distribution.</p>
                        </div>
                        <div class="feature-item">
                            <i class="fas fa-tools"></i>
                            <h3>Equipment Tracking</h3>
                            <p>Medical equipment inventory management with maintenance scheduling and availability status.</p>
                        </div>
                        <div class="feature-item">
                            <i class="fas fa-wrench"></i>
                            <h3>Maintenance Requests</h3>
                            <p>Automated maintenance request system with priority assignment and tracking.</p>
                        </div>
                    </div>
                </div>

                <div class="module-benefits">
                    <h2>Benefits</h2>
                    <ul>
                        <li>Optimize resource utilization and reduce operational costs</li>
                        <li>Improve patient flow and reduce wait times</li>
                        <li>Enhance staff productivity and satisfaction</li>
                        <li>Ensure equipment availability and maintenance</li>
                        <li>Streamline operational workflows and processes</li>
                    </ul>
                </div>

                <div class="module-cta">
                    <a href="index.html#modules" class="btn btn-secondary">
                        <i class="fas fa-arrow-left"></i> Back to Modules
                    </a>
                    <a href="index.html#contact" class="btn btn-primary">
                        Get Started <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <div class="footer-logo">
                        <i class="fas fa-hospital-alt"></i>
                        <span>Maxcode Solutions</span>
                    </div>
                    <p>Empowering healthcare providers with innovative management solutions.</p>
                </div>
                <div class="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="index.html#home">Home</a></li>
                        <li><a href="index.html#features">Features</a></li>
                        <li><a href="index.html#modules">Modules</a></li>
                        <li><a href="index.html#contact">Contact</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>Support</h4>
                    <ul>
                        <li><a href="#">Documentation</a></li>
                        <li><a href="#">Training</a></li>
                        <li><a href="#">Support Portal</a></li>
                        <li><a href="#">Community</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>Connect</h4>
                    <div class="social-links">
                        <a href="#"><i class="fab fa-linkedin"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-facebook"></i></a>
                        <a href="#"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2025 Maxcode Solutions. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <script src="script.js"></script>
</body>
</html>
EOF

# Insurance Management
cat > insurance-management.html << 'EOF'
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Insurance Management | Maxcode Solutions</title>
    <link rel="stylesheet" href="styles.css">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>
    <nav class="navbar">
        <div class="nav-container">
            <div class="nav-logo">
                <i class="fas fa-hospital-alt"></i>
                <span>Maxcode Solutions</span>
            </div>
            <ul class="nav-menu">
                <li><a href="index.html#home" class="nav-link">Home</a></li>
                <li><a href="index.html#features" class="nav-link">Features</a></li>
                <li><a href="index.html#modules" class="nav-link">Modules</a></li>
                <li><a href="index.html#benefits" class="nav-link">Benefits</a></li>
                <li><a href="index.html#contact" class="nav-link">Contact</a></li>
            </ul>
            <div class="nav-toggle">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </div>
    </nav>

    <section class="module-detail">
        <div class="container">
            <div class="module-detail-header">
                <div class="module-icon">
                    <i class="fas fa-file-invoice-dollar"></i>
                </div>
                <h1>Insurance Management</h1>
                <p class="module-subtitle">Comprehensive insurance policy and claim management system</p>
            </div>
            
            <div class="module-content">
                <div class="module-description">
                    <h2>Overview</h2>
                    <p>The Insurance Management module provides end-to-end insurance processing capabilities, from policy management to claim processing and payment tracking. It ensures seamless integration with billing systems and improves revenue cycle management.</p>
                </div>

                <div class="module-features-section">
                    <h2>Key Features</h2>
                    <div class="features-grid">
                        <div class="feature-item">
                            <i class="fas fa-shield-alt"></i>
                            <h3>Insurance Policy Management</h3>
                            <p>Comprehensive policy database with coverage details and benefit information.</p>
                        </div>
                        <div class="feature-item">
                            <i class="fas fa-file-alt"></i>
                            <h3>Claim Processing & Tracking</h3>
                            <p>Automated claim submission and real-time tracking of claim status.</p>
                        </div>
                        <div class="feature-item">
                            <i class="fas fa-check-circle"></i>
                            <h3>Pre-authorization Workflow</h3>
                            <p>Streamlined pre-authorization process with automated approval workflows.</p>
                        </div>
                        <div class="feature-item">
                            <i class="fas fa-link"></i>
                            <h3>Integration with Billing</h3>
                            <p>Seamless integration with billing systems for automated claim generation.</p>
                        </div>
                        <div class="feature-item">
                            <i class="fas fa-user-shield"></i>
                            <h3>Patient Insurance Records</h3>
                            <p>Centralized patient insurance information with policy history and coverage details.</p>
                        </div>
                    </div>
                </div>

                <div class="module-benefits">
                    <h2>Benefits</h2>
                    <ul>
                        <li>Reduce claim denials and improve approval rates</li>
                        <li>Accelerate payment processing and cash flow</li>
                        <li>Minimize manual errors in insurance processing</li>
                        <li>Improve patient satisfaction with transparent billing</li>
                        <li>Enhance revenue cycle management efficiency</li>
                    </ul>
                </div>

                <div class="module-cta">
                    <a href="index.html#modules" class="btn btn-secondary">
                        <i class="fas fa-arrow-left"></i> Back to Modules
                    </a>
                    <a href="index.html#contact" class="btn btn-primary">
                        Get Started <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <div class="footer-logo">
                        <i class="fas fa-hospital-alt"></i>
                        <span>Maxcode Solutions</span>
                    </div>
                    <p>Empowering healthcare providers with innovative management solutions.</p>
                </div>
                <div class="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="index.html#home">Home</a></li>
                        <li><a href="index.html#features">Features</a></li>
                        <li><a href="index.html#modules">Modules</a></li>
                        <li><a href="index.html#contact">Contact</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>Support</h4>
                    <ul>
                        <li><a href="#">Documentation</a></li>
                        <li><a href="#">Training</a></li>
                        <li><a href="#">Support Portal</a></li>
                        <li><a href="#">Community</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>Connect</h4>
                    <div class="social-links">
                        <a href="#"><i class="fab fa-linkedin"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-facebook"></i></a>
                        <a href="#"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2025 Maxcode Solutions. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <script src="script.js"></script>
</body>
</html>
EOF

echo "Generated hospital-operations.html and insurance-management.html"

# Continue with other modules...
echo "Module pages generated successfully!" 